import React from "react";
// import wilson1 from "../images/wilson_home_1.jpg"
import style from "./ImgWall.module.scss";

const ImgWall = () => {

  return (
    <section className={style.imgWall}>
      <div className={style.picCard}>
        <div className={style.mask}></div>
        <div className={style.img}>
          <img src="https://i.imgur.com/pe2rsCK.jpg" alt="wilson1" />
        </div>
        <div className={style.text}>
          <h2>Title</h2>
          <p>Text</p>
          <a href="/" class={style.button}>About Skate.</a>
        </div>
      </div>

      <div className={style.picCard}>
        <div className={style.mask}></div>
        <div className={style.img}>
          <img src="https://i.imgur.com/pe2rsCK.jpg" alt="wilson1" />
        </div>
        <div className={style.text}>
          <h2>Title</h2>
          <p>Text</p>
          <a href="/" class={style.button}>About Dance.</a>
        </div>

      </div>
      <div className={style.picCard}>
        <div className={style.mask}></div>
        <div className={style.img}>
          <img src="https://i.imgur.com/pe2rsCK.jpg" alt="wilson1" />
        </div>
        <div className={style.text}>
          <h2>Title</h2>
          <p>Text</p>
          <a href="/" class={style.button}>About F2E.</a>
        </div>

      </div>
    </section>
  );
};

export default ImgWall;
