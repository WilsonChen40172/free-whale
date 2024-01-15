import React, { useState, useEffect } from "react";
import SimulateLightStyle from "./SimulateLight.module.scss";
import style from "./F2E.module.scss";
// import { Link } from "react-router-dom";

const SimulateLight = () => {
  // 使用瀏覽器 API 更新文件標題
  useEffect(() => {
    document.title = "LeetCode Map";
  }, []);

  const [greenLight, setGreenLight] = useState(false);
  const [redLight, setRedLight] = useState(false);
  const [yellowLight, setYellowLight] = useState(false);

  const green = () => {
    // console.log("green");
    setGreenLight(true);
    setRedLight(false);
    setYellowLight(false);
    // console.log(greenLight);
  };
  const red = () => {
    // console.log("red");
    setGreenLight(false);
    setRedLight(true);
    setYellowLight(false);
    // console.log(redLight);
  };
  const yellow = () => {
    // console.log("yellow");
    setGreenLight(false);
    setRedLight(false);
    setYellowLight(true);
    // console.log(yellowLight);
  };

  const compare = (type) => {
    // console.log(type);
    switch (type) {
      case "callback":
        const simulateLightCallback = () => {
          green();
          setTimeout(() => {
            yellow();
            setTimeout(() => {
              red();
              setTimeout(() => {
                simulateLightCallback();
              }, 6000);
            }, 3000);
          }, 8000);
        };
        // 使用 callback 函式啟動
        simulateLightCallback(() => {});
        break;
      case "promise":
        const delayTime = (duration) =>
          new Promise((resolve) => setTimeout(resolve, duration));

        const trafficLightPromise = () => {
          green();
          delayTime(8000)
            .then(() => {
              yellow();
              return delayTime(3000);
            })
            .then(() => {
              red();
              return delayTime(6000);
            })
            .then(() => {
              return trafficLightPromise();
            });
        };

        // 使用 Promise 函式啟動
        trafficLightPromise();
        break;
      case "asyncawait":
        const delayTimeAsync = (duration) =>
          new Promise((resolve) => setTimeout(resolve, duration));

        const trafficLightAsync = async () => {
          while (true) {
            green();
            await delayTimeAsync(8000);
            yellow();
            await delayTimeAsync(3000);
            red();
            await delayTimeAsync(6000);
          }
        };

        // 使用 async/await 函式啟動
        trafficLightAsync();
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.F2E + " flex-all-center vh-100"}>
      <div className="text-center">
        <p className="p-10">Traffic Light</p>
        <span
          className={
            SimulateLightStyle.light +
            " " +
            SimulateLightStyle.green +
            " " +
            (greenLight ? SimulateLightStyle.active : "")
          }
        ></span>
        <span
          className={
            SimulateLightStyle.light +
            " " +
            SimulateLightStyle.yellow +
            " " +
            (yellowLight ? SimulateLightStyle.active : "")
          }
        ></span>
        <span
          className={
            SimulateLightStyle.light +
            " " +
            SimulateLightStyle.red +
            " " +
            (redLight ? SimulateLightStyle.active : "")
          }
        ></span>
      </div>
      <div className="text-center">
        <button
          className={"btn defaultButton mb-3 " + SimulateLightStyle.button}
          onClick={() => {
            compare("callback");
          }}
        >
          Callback
        </button>
        <button
          className={"btn defaultButton mb-3 " + SimulateLightStyle.button}
          onClick={() => {
            compare("promise");
          }}
        >
          Promise
        </button>
        <button
          className={"btn defaultButton mb-3 " + SimulateLightStyle.button}
          onClick={() => {
            compare("asyncawait");
          }}
        >
          Async/Await
        </button>
      </div>
      <button
        className={"btn defaultButton mb-3 " + SimulateLightStyle.button}
        onClick={() => {
          let endTid = setTimeout(function () {});
          for (let i = 0; i <= endTid; i++) {
            clearTimeout(i);
            // clearInterval(i);
          }
          setGreenLight(false);
          setRedLight(false);
          setYellowLight(false);
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default SimulateLight;
