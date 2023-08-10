import React from "react";
// import wilson1 from "../images/wilson_home_1.jpg"
import style from "./ImgWall.module.scss";
import { Link } from "react-router-dom";

const ImgWall = () => {
  return (
    <section className={style.imgWall}>
      <div className={style.picCard}>
        <div className={style.mask}></div>
        <div className={style.img}>
          <img src="https://i.imgur.com/pe2rsCK.jpg" alt="whalePic" />
        </div>
        <div className={style.text}>
          <h2>My All Life</h2>
          <p>About My All Life</p>
          <a href="/" className="defaultButton">
            About My All Life.
          </a>
        </div>
      </div>
      <div className={style.picCard}>
        <div className={style.mask}></div>
        <div className={style.img}>
          <img src="https://i.imgur.com/mRviZyI.jpg" alt="whalePic" />
        </div>
        <div className={style.text}>
          <h2>Front End Engineer Life</h2>
          <p>About My Front End.</p>
          <Link to="/F2E" className="defaultButton">
            About F2E.
          </Link>
        </div>
      </div>
      <div className={style.picCard}>
        <div className={style.mask}></div>
        <div className={style.img}>
          <img src="https://i.imgur.com/Bj1UIAX.jpg" alt="whalePic" />
        </div>
        <div className={style.text}>
          <h2>Dance Life</h2>
          <p>About My Dance Life</p>
          <a href="/" className="defaultButton">
            About My Dance.
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImgWall;
