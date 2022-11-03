import React from "react";
import style from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className="pinkBackground">
      <div className={"container "+style.AboutMe}>
        <p className={"title py-2 "+style.title}>About Me</p>
        <div className={style.sixTable}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
