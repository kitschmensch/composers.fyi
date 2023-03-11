import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./App.css";
import axios from "axios";
import React from "react";
import ComposerCard from "./ComposerCard";
import BaseUrl from "./BaseUrl";

export default function App() {
  const [count, setCount] = useState(0);
  const [composers, setComposers] = useState([]);

  const swipeBox = {
    zIndex: 200,
    width: "100%",
    position: "absolute",
    height: "calc(100% - 4rem)",
    top: "2rem",
    left: 0,
  };

  useEffect(() => {
    axios.get(`${BaseUrl}/index.php/composer/list`).then((response) => {
      response.data.unshift({ name: "Title" });
      setComposers(response.data);
    });
  }, []);

  let composerList = composers.map((composer, index) => (
    <ComposerCard composer={composer} index={index} x={count} key={index} />
  ));

  function swipe(index) {
    let newCount = count + index;
    if (newCount < 0) {
      newCount = composerList.length - 1;
    }
    if (newCount > composerList.length - 1) {
      newCount = 0;
    }

    setCount((count) => newCount);
  }

  const swipeSettings = useSwipeable({
    onSwipedLeft: () => swipe(1),
    onSwipedDown: () => swipe(1),
    onSwipedRight: () => swipe(-1),
    onSwipedUp: () => swipe(-1),
    onTap: () => swipe(1),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
    delta: 12,
  });

  const backgroundStyle = {
    backgroundImage: `url("${BaseUrl}/static/texture.png")`,
  };

  return (
    <div className="App">
      <div style={backgroundStyle} className="background" />
      <div {...swipeSettings} style={swipeBox}></div>
      <div className="centered">{composerList}</div>
      <div className="header">
        composers.fyi |{" "}
        <a href="https://www.github.com/kitschmensch">Source code</a> | Made by
        Jake&nbsp;Mecham
      </div>
    </div>
  );
}
