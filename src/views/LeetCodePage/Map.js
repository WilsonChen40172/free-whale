import React, { useEffect } from "react";
import style from "../LeetCode.module.scss";
// import { Link } from "react-router-dom";

const Map = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode Map";
    console.log(compare());
  });

  const compare = () => {
    const kvArray = [
      { key: 1, value: 10 },
      { key: 2, value: 20 },
      { key: 3, value: 30 },
    ];
    const afterObject = kvArray.map(function (object) {
      let rObj = {};
      rObj[object.key] = object.value * 2;
      return rObj;
    });
    return afterObject;
  };

  return <div className={style.leetCode}></div>;
};

export default Map;
