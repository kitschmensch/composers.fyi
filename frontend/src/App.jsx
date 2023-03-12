import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./App.css";
import axios from "axios";
import React from "react";
import Modal from "./Modal";
import ComposerCard from "./ComposerCard";
import BaseUrl from "./BaseUrl";

export default function App() {
  const [count, setCount] = useState(0);
  const [composers, setComposers] = useState([]);
  let [modalState, setModalState] = useState(true);

  const swipeBox = {
    zIndex: 200,
    position: "absolute",
    color: "green",
    height: "300px",
    width: "300px",
    padding: "1rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  useEffect(() => {
    axios.get(`${BaseUrl}/index.php/composer/list`).then((response) => {
      setComposers(response.data);
    });
  }, []);

  let composerList = composers.map((composer, index) => (
    <ComposerCard
      modalState={modalState}
      composer={composer}
      index={index}
      x={count}
      key={index}
    />
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

  function dismissModal() {
    setModalState(false);
  }

  const swipeSettings = useSwipeable({
    onSwipedLeft: () => swipe(1),
    onSwipedDown: () => swipe(1),
    onSwipedRight: () => swipe(-1),
    onSwipedUp: () => swipe(-1),
    onTap: (e) => {
      if (e.event instanceof MouseEvent) {
        if (e.event.shiftKey) {
          swipe(-1);
          return;
        }
        swipe(1);
        return;
      }
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
    delta: 12,
  });

  const backgroundStyle = {
    backgroundImage: `url("${BaseUrl}/static/texture.png")`,
  };

  return (
    <div style={backgroundStyle} className="background App">
      <div onClick={dismissModal}>
        <Modal modalState={modalState} />
      </div>

      <div {...swipeSettings} style={swipeBox}></div>
      <div className="centered">{composerList}</div>
      <div className="header">
        composers.fyi |{" "}
        <a href="https://github.com/kitschmensch/composers.fyi">Source code</a>{" "}
        | Made&nbsp;by&nbsp;Jake&nbsp;Mecham
      </div>
    </div>
  );
}
