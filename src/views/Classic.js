import React, { useEffect } from "react";
import style from "./Classic.module.scss";

const Classic = () => {
  useEffect(() => {
    //did mount
    document.title = "Classic";
    return () => {
      //will mount
    };
  }, []);

  return (
    <div className={style.Classic}>
      <section className={"fullPage"}>
        <div className={"Classic"}>
          <p className="title">前導</p>
          <p>1.網頁網站架構</p>
          <p>2.職缺需要技能</p>
          <p>3.其他軟體相關簡介</p>
        </div>
      </section>
      <section className={"fullPage"}>
        <div className={"Home"}>
          <div className={"Classic"}>
            <p className="title">基礎環境建置</p>
            <p>1.Vs Code</p>
            <p>2.外掛套件</p>
          </div>
        </div>
      </section>
      <section className={"fullPage"}>
        <div className={"Classic"}>
          <p className="title">Html</p>
          <p>1.Html標籤架構</p>
          <p>2.Html標籤介紹</p>
          <p>3.Html屬性</p>
          <p>4.Style屬性</p>
          <p>3.Html註解</p>
        </div>
      </section>
      <section className={"fullPage"}></section>
    </div>
  );
};

export default Classic;
