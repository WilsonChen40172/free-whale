import React, { useEffect } from "react";
import style from "./Home.module.scss";
import ImgWall from "../components/ImgWall";
import AboutMe from "./AboutMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// import { Link } from "react-scroll";

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
          <p className={style.introduce}>Frond-End Engineer. Dancer. Creator. </p>
          <div className={style.community}>
            <a
              href="https://www.instagram.com/whale.js"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.fb.com/kk811215"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.twitter.com/kk811215"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://github.com/WilsonChen40172"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </section>
      <ImgWall></ImgWall>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
