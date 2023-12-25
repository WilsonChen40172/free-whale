import React, { useState, useEffect } from "react";
// import style from "./LeetCode.module.scss";
import style from "./F2E.module.scss";
// import { Link } from "react-router-dom";

const Map = () => {
  const [consoleData, setConsoleData] = useState([
    { key: 0, value: 10 },
    { key: 1, value: 20 },
    { key: 2, value: 30 },
  ]);
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode Map";
  });

  const compare = () => {
    const oldData = consoleData;
    let returnObj = [];
    oldData.map(function (object) {
      returnObj.push({ key: object.key, value: object.value * 2 });
    });
    // console.log(returnObj);
    setConsoleData(returnObj);
  };

  return (
    <div className={style.F2E + " flex-all-center vh-100"}>
      {consoleData.map((data) => (
        <div className="text-center p-4" key={data.key}>
          <p>{data.value}</p>
        </div>
      ))}
      <button className="btn defaultButton mb-3" onClick={compare}>Compare</button>
    </div>
  );
};

export default Map;