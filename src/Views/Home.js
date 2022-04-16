import React, { useState, useEffect } from "react";
// import wilson1 from "../images/wilson_home_1.jpg"
import wilson_home_1 from "../images/wilson_home_1.JPG";
import wilson_home_2 from "../images/wilson_home_2.JPG";
import wilson_home_3 from "../images/wilson_home_3.JPG";
import wilson_home_4 from "../images/wilson_home_4.JPG";
import wilson_home_5 from "../images/wilson_home_5.JPG";
import style from "./Home.module.scss";

const Home = () => {
  const [img, setImg] = useState(0);
  useEffect(() => {
    //did mount

    return () => {
      //will mount
    };
  }, []);

  return (
    <div className="Home">
      <div className={"imgWall d-flex " + style.imgWall}>
        <div className={"col-6 d-flex " + style.onePicWall}>
          <div className={"col-12 "+style.picCard}>
            <img className="" src={wilson_home_1} alt="wilson1" />
            <p><a href="">111</a></p>
          </div>
        </div>
        <div className={"col-6 d-flex " + style.fourPicsWall}>
          <div className="col-6">
            <div className={"col-12 "+style.picCard}>
              <img className="" src={wilson_home_2} alt="wilson2" />
              <p><a href="">123</a></p>
            </div>
            <div className={"col-12 "+style.picCard}>
              <img className="" src={wilson_home_3} alt="wilson3" />
              <p><a href="">123</a></p>
            </div>
          </div>
          <div className="col-6">
            <div className={"col-12 "+style.picCard}>
              <img className="" src={wilson_home_4} alt="wilson4" />
              <p><a href="">123</a></p>
            </div>
            <div className={"col-12 "+style.picCard}>
              <img className="" src={wilson_home_5} alt="wilson5" />
              <p><a href="">123</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <p className="title py-2">標題{img}</p>
          <button className="button" onClick={() => setImg(1)}>setImg</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
