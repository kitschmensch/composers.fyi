import BaseUrl from "./BaseUrl.js";
import AudioClip from "./AudioClip.jsx";
import "./ComposerCard.css";

const ComposerCard = ({ composer, x, index }) => {
  //Styles
  const spacing = 20;
  const zoom = 6;
  let position = index - x;
  let scale = (position - Math.sqrt(zoom * 100)) ** 2 / zoom;

  function cardStyle() {
    let transform = position * spacing;
    let css = {
      zIndex: -index,
      transition:
        "transform 0.5s ease-in-out, visibility 0.5s, opacity 0.5s linear, scale 0.5s ease-in-out",
      position: "absolute",
    };
    if (position > 30) {
      css.display = "none";
      return css;
    }
    if (position < 0) {
      css.opacity = 0;
      css.visibility = "hidden";
      css.transform = `translate(-800px, 0px)`;
      return css;
    }
    css.transform = `translate(-50%, -50%) translate(${transform}px, ${
      transform * -1
    }px)`;
    css.scale = `${scale}%`;
    return css;
  }

  if (composer.name == "Title") {
    return (
      <div style={cardStyle()} className="composer-card">
        <h3>composers.fyi</h3>
        <p>A journey through the history of Western&nbsp;Art&nbsp;Music.</p>
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
  }
  return (
    <div style={cardStyle()} className="composer-card">
      <h3>{composer.complete_name}</h3>

      <img
        src={`${BaseUrl}/static/img/${composer.name}.jpg`}
        alt={`Picture of ${composer.name}`}
      />
      <p className="dates">
        <i>
          {composer.birthdate.substr(0, 4)} - {composer.deathdate.substr(0, 4)}
        </i>
      </p>
      <p></p>
      <AudioClip
        playing={position == 0}
        src={`${BaseUrl}/static/audio/${composer.name}.mp3`}
      />
    </div>
  );
};

export default ComposerCard;
