import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode38 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode38";
  });

  const [inputString, setInputString] = useState("1121112");
  const [result, setResult] = useState("");

  const compare = () => {
    //把字串丟進來處理
    const thisString = inputString;
    //最後結果
    const returnArray = [];

    //控制數量
    let counts = 1;
    //比對第幾個 預設第一個
    let whatNum = inputString.charAt(0);

    for (let index = 1; index <= thisString.length; index++) {
      //相等的話數量++
      if (whatNum === thisString.charAt(index)) {
        counts++;
      }
      //不相等的話把數量丟進去 再丟是什麼數字 然後數字變成下一個 最後重置數量
      else {
        returnArray.push(counts);
        returnArray.push(whatNum);
        whatNum = thisString.charAt(index);
        counts = 1;
      }
    }
    setResult(returnArray);
  };

  return (
    <div className={style.leetCode}>
      <h2>LeetCode 38. Valid Anagram.</h2>
      <div className="leetCodeTopic">
        <p>
          The count-and-say sequence is the sequence of integers beginning as
          follows: 1, 11, 21, 1211, 111221, ... 1 is read off as "one 1" or 11.
          11 is read off as "two 1s" or 21. 21 is read off as "one 2, then one
          1" or 1211. Given an integer n, generate the nth sequence. Note: The
          sequence of integers will be represented as a string.
        </p>
      </div>
      <div className={"leetCodeAnswer " + style.leetCodeTopic}>
        <div className="inputTable">
          <div className="half mb-3">
            <input
              type="number"
              className="form-control"
              value={inputString}
              onChange={(event) => setInputString(event.target.value)}
            />
          </div>
        </div>

        <button onClick={compare} className="btn defaultButton mb-3">
          Run
        </button>
        <font className="d-block" size="3">
          Result:<span>{result}</span>
        </font>
        <Link to={"/f2e/LeetCode/0"}>Back</Link>
      </div>
    </div>
  );
};

export default LeetCode38;
