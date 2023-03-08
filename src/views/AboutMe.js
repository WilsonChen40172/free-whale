import React from "react";
import style from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className="pinkBackground">
      <div className={"container " + style.AboutMe}>
        <p className={"title py-2 " + style.title}>About Me</p>
        <div className={style.sixTable}>
          <section>
            <h3>♐️</h3>
            <p>標準射手座，樂天隨性自由派</p>
          </section>
          <section>
            <h3>🎶</h3>
            <p>喜歡跳舞 和音樂一起玩耍</p>
          </section>
          <section>
            <h3>🌴</h3>
            <p>愛大自然；風吹、草動、海浪聲</p>
          </section>
          <section>
            <h3>☕️</h3>
            <p>咖啡因中毒患者，偶而小酌</p>
          </section>
          <section>
            <h3>😈</h3>
            <p>吉祥物是耿鬼</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
