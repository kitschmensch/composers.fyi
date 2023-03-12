import React from "react";

const Modal = ({ modalState }) => {
  function modalStyle() {
    let css = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 201,
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "0.25rem",
      boxShadow: "0px 0px 1000px 100px rgba(0,0,0,0.05)",
      transition: "visibility 0.5s, opacity 0.5s",
    };

    if (!modalState) {
      css.opacity = 0;
      css.visibility = "hidden";
    }
    return css;
  }

  return (
    <div style={modalStyle()} className="composer-card">
      <h3>composers.fyi</h3>
      <p>A journey through the history of Western&nbsp;Art&nbsp;Music</p>
      <ul>
        <li>Turn up the volume to hear a sample piece from each composer.</li>
        <li>Swipe, tap, or click to navigate through the timeline.</li>
        <li>
          Similar orchestral samples were chosen to make stylistic comparisons
          easier.
        </li>
      </ul>
      <p className="fleuron">❦</p>
    </div>
  );
};

export default Modal;
