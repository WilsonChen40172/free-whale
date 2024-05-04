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
          <img src="https://i.imgur.com/mRviZyI.jpg" alt="whalePic" />

        </div>
        <div className={style.text}>
          <h2>Traveler Life</h2>
          <p>About My Travel Life</p>
          <Link to={"/Traveler"} className="defaultButton">
            Link
          </Link>
        </div>
      </div>
      <div className={style.picCard}>
        <div className={style.mask}></div>
        <div className={style.img}>
          <img src="https://i.imgur.com/pe2rsCK.jpg" alt="whalePic" />
        </div>
        <div className={style.text}>
          <h2>Front End Engineer Life</h2>
          <p>About My Front End.</p>
          <Link to="/F2E" className="defaultButton">
            Link
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
          <p>About My Dance.</p>
          <Link to={"/Dance"} className="defaultButton">
            Link
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImgWall;
