import React, { useEffect } from "react";
import style from "./Home.module.scss";
import ImgWall from "../components/ImgWall";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "Free Whale";
    // console.log(parseFloat(1.4000000000000001.toPrecision(12)) === 1.4);  // True)
  });
  return (
    <div className="Home">
      <section className={style.about}>
        <div className={style.text}>
          <h1 className={style.title}>Free Whale</h1>
          <p className={style.introduce}>Coding Dance Invest SkateBoard </p>
          <div className={style.community}>
            <a href="https://www.instagram.com/whale.js" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.fb.com/kk811215" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/kk811215" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://github.com/WilsonChen40172" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </section>
      <ImgWall></ImgWall>
      <section className="">
        <div className="container">
          <p className="title py-2">About Me</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
