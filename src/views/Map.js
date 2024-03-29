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

  // 使用瀏覽器 API 更新文件標題
  useEffect(() => {
    document.title = "LeetCode Map";
  }, []);

  const compare = () => {
    const oldData = consoleData;
    let returnObj = [];
    oldData.map(function (object) {
      returnObj.push({ key: object.key, value: object.value * 2 });
      return returnObj;
    });
    // console.log(returnObj);
    setConsoleData(returnObj);
  };

  // 考[1,2,3[4,5,6]]陣列中值的加總，還有陣列中返回最多長度的字串，以及判斷陣列中是否有重複元素
  // js考題，多層嵌套的的 array 中有數字或是 array，統計整數加總值

  const [arrayData, setArrayData] = useState([0, 1, 2, [3, 4]]);
  const [arraySum, setArraySum] = useState(0);
  const arrayTotal = () => {
    let thisArray = arrayData.flat(Infinity);
    const sum = thisArray.reduce((acc, num) => acc + num, 0);
    setArraySum(sum);
  }
  // arrayTotal();

  return (
    <div className={style.F2E + " flex-all-center vh-100"}>
      {consoleData.map((data) => (
        <div className="text-center" key={data.key}>
          <p className="p-10">
            {data.value}
          </p>
        </div>
      ))}

      <button className="btn defaultButton mb-3" onClick={compare}>
        Compare
      </button>
      <div className="text-center">
        <p>{arraySum}</p>
      </div>
      <button className="btn defaultButton mb-3" onClick={arrayTotal}>
        Sum
      </button>
    </div>
  );
};

export default Map;
