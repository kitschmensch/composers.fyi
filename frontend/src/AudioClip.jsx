import { useRef, useEffect } from "react";

export default function AudioClip({ playing, src }) {
  const interval = 10;
  const volumeStep = 0.01;
  const audio = useRef(null);

  //Using useRef to store the playing state gets around recursive setTimeout closures.
  const playingRef = useRef(playing);
  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  playingRef.current = playing;

  //Equivalent to componentDidMount
  useEffect(() => {
    audio.current.volume = 0;
    if (ios) {
      audio.current.muted = true;
    }
  }, []);

  useEffect(() => {
    fade(ios);
  }, [playing]);

  //Recursive function allows for smooth fade in/out even if the "playing" is changed rapidly.
  //Frustratingly, in iOS the audio element volume always returns 1, so we have to use muted instead.
  function fade(ios = false) {
    if (playingRef.current) {
      if (audio.current.paused) {
        audio.current.play();
      }
      if (ios) {
        audio.current.muted = false;
      }
      if (audio.current.volume < 1) {
        audio.current.volume =
          Math.round((audio.current.volume + volumeStep) * 100) / 100;
        setTimeout(fade, interval);
      }
    } else {
      if (ios) {
        audio.current.muted = true;
      }
      if (audio.current.volume > 0) {
        audio.current.volume =
          Math.round((audio.current.volume - volumeStep) * 100) / 100;
        setTimeout(fade, interval);
      } else {
        if (!audio.current.paused) {
          audio.current.pause();
          audio.current.currentTime = 0;
        }
      }
    }
  }

  return <audio ref={audio} src={src} preload="auto" />;
}
