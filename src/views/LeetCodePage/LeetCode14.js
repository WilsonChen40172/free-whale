import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode14 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode14";
    compare();
  });

  const [inputStringA, setInputStringA] = useState("abcd");
  const [inputStringB, setInputStringB] = useState("abccc");
  const [inputStringC, setInputStringC] = useState("abdec");
  const [result, setResult] = useState("");

  const compare = () => {
    const thisArray = [inputStringA, inputStringB, inputStringC];
    //拿來比對的資料
    let firstCount = thisArray[0];

    for (
      let indexAllData = 0;
      indexAllData < thisArray.length;
      indexAllData++
    ) {
      for (
        let indexDataLength = 0;
        indexDataLength < thisArray[indexAllData].length;
        indexDataLength++
      ) {
        if (
          firstCount.slice(0, indexDataLength) ===
          thisArray[indexAllData].slice(0, indexDataLength)
        ) {
        } else {
          firstCount = firstCount.slice(0, indexDataLength - 1);
        }
      }
    }

    setResult(firstCount);
  };

  return (
    <div className={style.leetCode}>
      <h2>LeetCode 14. Longest Common Prefix.</h2>
      <div className="leetCodeTopic">
        <p>
          Write a function to find the longest common prefix string amongst an
          array of strings.
        </p>
      </div>
      <div className={"leetCodeAnswer " + style.leetCodeTopic}>
        <div className="inputTable">
          <div className="half mb-3">
            <input
              type="text"
              className="form-control"
              value={inputStringA}
              onChange={(event) => setInputStringA(event.target.value)}
            />
          </div>
          <div className="half mb-3">
            <input
              type="text"
              className="form-control"
              value={inputStringB}
              onChange={(event) => setInputStringB(event.target.value)}
            />
          </div>
          <div className="half mb-3">
            <input
              type="text"
              className="form-control"
              value={inputStringC}
              onChange={(event) => setInputStringC(event.target.value)}
            />
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

export default LeetCode14;
