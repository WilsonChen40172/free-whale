// import GlobalMethod from "../global/GlobalMethod";
import React, { useEffect } from "react";
import { Howl, Howler } from "howler";
import style from "../views/F2E.module.scss";

const AudioEffects = () => {
  useEffect(() => {
    //did mount
    document.title = "Audio Effects";
    return () => {
      //will mount
    };
  }, []);
  const playAudio = () => {
    var sound = new Howl({
      src: ["audio/click.mp3"],
      html5: true,
      onend: () => {
        sound.unload();
      },
    });
    sound.play();
    Howler.volume(0.5);
  };
  return (
    <section className={style.F2E + " flex-all-center vh-100"}>
      <button className="btn defaultButton mb-3" onClick={playAudio}>
        Click Audio
      </button>
    </section>
  );
};

export default AudioEffects;
