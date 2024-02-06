import React, { useEffect } from "react";
import style from "./Classic.module.scss";
import Html from "./ClassicPages/Html";
import Introduction from "./ClassicPages/Introduction";
import EnvironmentSetup from "./ClassicPages/EnvironmentSetup";

const Classic = () => {
  useEffect(() => {
    //did mount
    document.title = "Classic";
    return () => {
      //will mount
    };
  }, []);

  return (
    <div className={style.Classic}>
      <section className={"fullPage"}>
        <Introduction />
      </section>
      <section className={"fullPage pinkBackground"}>
        <EnvironmentSetup />
      </section>
      <section className={"fullPage"}>
        <Html />
      </section>
      <section className={"fullPage pinkBackground"}></section>
    </div>
  );
};

export default Classic;
