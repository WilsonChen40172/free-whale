import React from "react";
import style from "./AboutMe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faDrawPolygon,
  faGhost,
  faMusic,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { faFulcrum } from "@fortawesome/free-brands-svg-icons";
// faCodepen

const AboutMe = () => {
  return (
    <section className="pinkBackground">
      <div className={"container " + style.AboutMe}>
        <p className={"title " + style.title}>What Can I Do For You?</p>
        <p className={style.text}>
          以下有各種關於我自己的介紹，想合作可透過最上方各種社群網站連結找到我。
        </p>
        <div className={style.sixTable}>
          <section>
            <span>
              <FontAwesomeIcon icon={faMusic} className="cursor-pointer fs-3" />
            </span>
            <h3>Dance Choreography</h3>
            <p>
              In dance, choreography may also refer to the design itself, which
              is sometimes expressed by means of dance notation.
            </p>
          </section>
          <section>
            <span>
              <FontAwesomeIcon
                icon={faDrawPolygon}
                className="cursor-pointer fs-3"
              />
            </span>
            <h3>Web Design</h3>
            <p>
              A design is a concept of either an object, a process, or a system
              that is specific and, in most cases, detailed.
            </p>
          </section>
          <section>
            <span>
              <FontAwesomeIcon icon={faTree} className="cursor-pointer fs-3" />
            </span>
            <h3>Creator</h3>
            <p>
              Creator is something or someone who brings something into being.
            </p>
          </section>
          <section>
            <span>
              <FontAwesomeIcon
                icon={faCoffee}
                className="cursor-pointer fs-3"
              />
            </span>
            <h3>A Coffee Person</h3>
            <p>
              Coffee is a beverage prepared from roasted coffee beans. Darkly
              colored, bitter, and slightly acidic, coffee has a stimulating
              effect on humans, primarily due to its caffeine content.
            </p>
          </section>
          <section>
            <span>
              <FontAwesomeIcon
                icon={faFulcrum}
                className="cursor-pointer fs-3"
              />
            </span>
            <h3>In Future</h3>
            <p>
              The future is the time after the past and present. Its arrival is
              considered inevitable due to the existence of time and the laws of
              physics.
            </p>
          </section>
          <section>
            <span>
              <FontAwesomeIcon icon={faGhost} className="cursor-pointer fs-3" />
            </span>
            <h3>Pokémon Trainer</h3>
            <p>
              A Pokémon Trainer (Japanese: ポケモントレーナー Pokémon Trainer)
              is a person who catches, trains, cares for, and battles with
              Pokémon.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
