import React from "react";
// import wilson1 from "../images/wilson_home_1.jpg"
import wilson_home_1 from "../images/wilson_home_1.JPG";
// import wilson_home_2 from "../images/wilson_home_2.JPG";
// import wilson_home_3 from "../images/wilson_home_3.JPG";
// import wilson_home_4 from "../images/wilson_home_4.JPG";
// import wilson_home_5 from "../images/wilson_home_5.JPG";
import style from "./ImgWall.module.scss";

const ImgWall = () => {

  return (
    <div className={"imgWall d-flex " + style.imgWall}>
      <div className={"col-12 d-flex " + style.onePicWall}>
        <div className={"col-12 " + style.picCard}>
          <img className="" src={wilson_home_1} alt="wilson1" />
          <div className={style.mask}></div>
          <p>
            <a href="/">111</a>
          </p>
        </div>
      </div>
      {/* <div className={"col-6 d-flex " + style.fourPicsWall}>
        <div className="col-6">
          <div className={"col-12 " + style.picCard}>
            <img className="" src={wilson_home_2} alt="wilson2" />
            <div className={style.mask}></div>
            <p>
              <a href="/">123</a>
            </p>
          </div>
          <div className={"col-12 " + style.picCard}>
            <img className="" src={wilson_home_3} alt="wilson3" />
            <div className={style.mask}></div>
            <p>
              <a href="/">123</a>
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className={"col-12 " + style.picCard}>
            <img className="" src={wilson_home_4} alt="wilson4" />
            <div className={style.mask}></div>
            <p>
              <a href="/">123</a>
            </p>
          </div>
          <div className={"col-12 " + style.picCard}>
            <img className="" src={wilson_home_5} alt="wilson5" />
            <div className={style.mask}></div>
            <p>
              <a href="/">123</a>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ImgWall;
