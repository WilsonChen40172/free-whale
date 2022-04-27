import React, { useEffect } from "react";
import style from "./Home.module.scss";
import ImgWall from "../components/ImgWall";

const Home = () => {
  
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "Free Whale";
    // console.log(parseFloat(1.4000000000000001.toPrecision(12)) === 1.4);  // True)
  });
  return (
    <section className="Home">
      <section className={style.about}>
        <div className={style.text}>
          <p>abc</p>
        </div>
      </section>
      <ImgWall></ImgWall>
      <div className="section">
        <div className="container">
          <p className="title py-2">About Me</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
