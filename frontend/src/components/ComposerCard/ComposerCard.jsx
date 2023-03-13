import AudioClip from "../AudioClip/AudioClip.jsx";
import "./ComposerCard.css";

const ComposerCard = ({ modalState, composer, x, index }) => {
  const spacing = 20;
  const zoom = 6;
  let position = index - x;
  let scale = (position - Math.sqrt(zoom * 100)) ** 2 / zoom;
  let transform = position * spacing;

  let css = {
    zIndex: -index,
    transition:
      "transform 0.5s ease-in-out, visibility 0.5s, opacity 0.5s linear, scale 0.5s ease-in-out",
    position: "absolute",
    transform: `translate(-50%, -50%) translate(${transform}px, ${
      transform * -1
    }px)`,
    scale: `${scale}%`,
  };

  const cardStyle = () => {
    if (position > 30) {
      return { display: "none" };
    } else if (position < 0) {
      css.opacity = 0;
      css.visibility = "hidden";
      css.transform = `translate(-800px, 0px)`;
      return css;
    } else {
      return css;
    }
  };

  return (
    <div style={cardStyle()} className="composer-card">
      <h3>{composer.complete_name}</h3>
      <img
        src={`/static/img/${composer.name}.webp`}
        alt={`Picture of ${composer.name}`}
      />
      <p className="dates">
        <i>
          {composer.birthdate.substr(0, 4)} - {composer.deathdate.substr(0, 4)}
        </i>
      </p>
      <p></p>
      <AudioClip
        modalState={modalState}
        playing={position == 0}
        src={`/static/audio/${composer.name}.mp3`}
      />
    </div>
  );
};

export default ComposerCard;
