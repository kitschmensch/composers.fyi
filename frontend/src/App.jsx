import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./App.css";
import axios from "axios";
import React from "react";
import Modal from "./components/Modal/Modal";
import ComposerCard from "./components/ComposerCard/ComposerCard";

export default function App() {
  const [count, setCount] = useState(0);
  const [composers, setComposers] = useState([]);
  const [modalState, setModalState] = useState(true);

  useEffect(() => {
    axios.get(`/index.php/composer/list`).then((response) => {
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

  const swipe = (index) => {
    let newCount = count + index;
    if (newCount < 0) {
      newCount = composerList.length - 1;
    } else if (newCount > composerList.length - 1) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const swipeSettings = useSwipeable({
    onSwipedLeft: () => swipe(1),
    onSwipedDown: () => swipe(1),
    onSwipedRight: () => swipe(-1),
    onSwipedUp: () => swipe(-1),
    onTap: (e) => {
      if (e.event instanceof MouseEvent) {
        if (!e.event.shiftKey) {
          swipe(1);
        } else {
          swipe(-1);
        }
      }
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
    delta: 12,
  });

  return (
    <main className="background App">
      <div onClick={() => setModalState(false)}>
        <Modal modalState={modalState} />
      </div>
      <div {...swipeSettings} className="swipeBox"></div>
      <div className="centered">{composerList}</div>
      <footer>
        composers.fyi |{" "}
        <a href="https://github.com/kitschmensch/composers.fyi">Source code</a>{" "}
        | Made&nbsp;by&nbsp;Jake&nbsp;Mecham
      </footer>
    </main>
  );
}
