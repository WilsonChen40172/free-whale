import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode1 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode1";
  });

  const [inputStringA, setInputStringA] = useState(2);
  const [inputStringB, setInputStringB] = useState(7);
  const [inputStringC, setInputStringC] = useState(11);
  const [inputStringD, setInputStringD] = useState(15);
  const [inputStringAll, setInputStringAll] = useState(9);
  const [result, setResult] = useState([0, 0].join());

  const compare = () => {
    const thisArray = [inputStringA, inputStringB, inputStringC, inputStringD];
    let hasValue = false;
    for (let indexOne = 0; indexOne < thisArray.length; indexOne++) {
      for (
        let indexTwo = indexOne + 1;
        indexTwo < thisArray.length;
        indexTwo++
      ) {
        if (
          Number(inputStringAll) ===
          thisArray[indexOne] + thisArray[indexTwo]
        ) {
          setResult([indexOne + 1, indexTwo + 1].join());
          hasValue = true;
        }
      }
    }
    if (!hasValue) {
      setResult(0);
    }
  };

  return (
    <div className={style.leetCode}>
      <h2>LeetCode 1. Two Sum.</h2>
      <div className="leetCodeTopic">
        <p>
          Given an array of integers, return indices of the two numbers such
          that they add up to a specific target. You may assume that each input
          would have exactly one solution.
        </p>
      </div>
      <div className={"leetCodeAnswer " + style.leetCodeTopic}>
        <div className="inputTable">
          <div className="half mb-3 d-flex">
            <input
              type="number"
              className="form-control"
              value={inputStringA}
              onChange={(event) => setInputStringA(event.target.value)}
            />

            <input
              type="number"
              className="form-control"
              value={inputStringB}
              onChange={(event) => setInputStringB(event.target.value)}
            />

            <input
              type="number"
              className="form-control"
              value={inputStringC}
              onChange={(event) => setInputStringC(event.target.value)}
            />

            <input
              type="number"
              className="form-control"
              value={inputStringD}
              onChange={(event) => setInputStringD(event.target.value)}
            />
          </div>
          <div className="half mb-3"></div>
        </div>

        <div className={"leetCodeAnswer " + style.leetCodeTopic}>
          <div className="inputTable">
            <div className="half mb-3">
              <input
                type="number"
                className="form-control"
                value={inputStringAll}
                onChange={(event) => setInputStringAll(event.target.value)}
              />
            </div>
            <div className="half mb-3"></div>
          </div>
        </div>
        <button onClick={compare} className="btn defaultButton mb-3">
          Run
        </button>
        <font className="d-block" size="3">
          Result:<span>{result}</span>
        </font>
        <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/0"}>Back</Link>
      </div>
    </div>
  );
};

export default LeetCode1;
