import React, { useState, useEffect } from "react";
import SimulateLightStyle from "./SimulateLight.module.scss";
import style from "./F2E.module.scss";
// import { Link } from "react-router-dom";

const SimulateLight = () => {
  // 使用瀏覽器 API 更新文件標題
  useEffect(() => {
    document.title = "SimulateLight";
  }, []);

  const [greenLight, setGreenLight] = useState(false);
  const [redLight, setRedLight] = useState(false);
  const [yellowLight, setYellowLight] = useState(false);
  const [greenMins, setGreenMins] = useState(8000);
  const [redMins, setRedMins] = useState(3000);
  const [yellowMins, setYellowMins] = useState(6000);

  const green = () => {
    setGreenLight(true);
    setRedLight(false);
    setYellowLight(false);
  };
  const red = () => {
    setGreenLight(false);
    setRedLight(true);
    setYellowLight(false);
  };
  const yellow = () => {
    setGreenLight(false);
    setRedLight(false);
    setYellowLight(true);
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
              }, yellowMins);
            }, redMins);
          }, greenMins);
        };
        // 使用 callback 函式啟動
        simulateLightCallback(() => {});
        break;
      case "promise":
        const delayTime = (duration) =>
          new Promise((resolve) => setTimeout(resolve, duration));

        const trafficLightPromise = () => {
          green();
          delayTime(greenMins)
            .then(() => {
              yellow();
              return delayTime(redMins);
            })
            .then(() => {
              red();
              return delayTime(yellowMins);
            })
            .then(() => {
              return trafficLightPromise();
            });
        };

        // 使用 Promise 函式啟動
        trafficLightPromise();
        break;
      case "async/await":
        const delayTimeAsync = (duration) =>
          new Promise((resolve) => setTimeout(resolve, duration));

        const trafficLightAsync = async () => {
          while (true) {
            green();
            await delayTimeAsync(greenMins);
            yellow();
            await delayTimeAsync(redMins);
            red();
            await delayTimeAsync(yellowMins);
          }
        };

        // 使用 async/await 函式啟動
        trafficLightAsync();
        break;
      default:
        break;
    }
  };

  const stopLight = () => {
    let endTid = setTimeout(function () {});
    for (let i = 0; i <= endTid; i++) {
      clearTimeout(i);
      // clearInterval(i);
    }
    setGreenLight(false);
    setRedLight(false);
    setYellowLight(false);
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

      <div className={"text-center " + SimulateLightStyle.inputWindowSection}>
        <label htmlFor="" className={SimulateLightStyle.inputLabel}>
          Green mins:
        </label>
        <input
          className={"form-control"}
          type="number"
          name=""
          id=""
          value={greenMins}
          onChange={(e) => setGreenMins(e.target.value)}
        />
        <label htmlFor="" className={SimulateLightStyle.inputLabel}>
          Yellow mins:
        </label>
        <input
          className={"form-control"}
          type="number"
          name=""
          id=""
          value={yellowMins}
          onChange={(e) => setYellowMins(e.target.value)}
        />
        <label htmlFor="" className={SimulateLightStyle.inputLabel}>
          Red mins:
        </label>
        <input
          className={"form-control"}
          type="number"
          name=""
          id=""
          value={redMins}
          onChange={(e) => setRedMins(e.target.value)}
        />
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
            compare("async/await");
          }}
        >
          Async/Await
        </button>
        <button
          className={"btn defaultButton mb-3 " + SimulateLightStyle.button}
          onClick={() => {
            stopLight();
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default SimulateLight;
