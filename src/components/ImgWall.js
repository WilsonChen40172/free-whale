import React from "react";
// import wilson1 from "../images/wilson_home_1.jpg"
import style from "./ImgWall.module.scss";

const ImgWall = () => {
  return (
    <section className={style.imgWall}>
      <div className={style.picCard}>
        <div className={style.mask}></div>
        <div className={style.img}>
          <img src="https://i.imgur.com/mRviZyI.jpg" alt="wilsonPic" />
        </div>
        <div className={style.text}>
          <h2>Title</h2>
          <p>Text</p>
          <a href="/" className={style.button}>
            About F2E.
          </a>
        </div>
      </div>
      <div className={style.picCard}>
        <div className={style.mask}></div>
        <div className={style.img}>
          <img src="https://i.imgur.com/pe2rsCK.jpg" alt="wilsonPic" />
        </div>
        <div className={style.text}>
          <h2>Title</h2>
          <p>Text</p>
          <a href="/" className={style.button}>
            About Skate.
          </a>
        </div>
      </div>
      <div className={style.picCard}>
        <div className={style.mask}></div>
        <div className={style.img}>
          <img src="https://i.imgur.com/3JKQ2PT.jpg" alt="wilsonPic" />
        </div>
        <div className={style.text}>
          <h2>Title</h2>
          <p>Text</p>
          <a href="/" className={style.button}>
            About Dance.
          </a>
        </div>
      </div>ㄑ
    </section>
  );
};

export default ImgWall;
