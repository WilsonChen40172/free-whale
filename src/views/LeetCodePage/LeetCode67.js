import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode67 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode67";
  });

  const [inputStringA, setInputStringA] = useState("1110");
  const [inputStringB, setInputStringB] = useState("101");
  const [result, setResult] = useState("");

  const compare = () => {
    //單純轉譯 沒解完 再加油好嗎 :)
    var sumStr = "";
    var carry = 0;
    var longStr, shortStr;
    if (inputStringA.length > inputStringB.length) {
      longStr = inputStringA;
      shortStr = inputStringB;
    } else {
      longStr = inputStringB;
      shortStr = inputStringA;
    }
    longStr = longStr.split("").reverse().join("");
    shortStr = shortStr.split("").reverse().join("");

    for (let index = 0; index < shortStr.length; index++) {
      var cBefore =
        parseInt(shortStr.charAt(index)) +
        parseInt(longStr.charAt(index)) +
        carry;
      if (cBefore > 1) {
        carry = 1;
        cBefore = cBefore % 2;
      } else {
        carry = 0;
      }

      sumStr = cBefore + sumStr;
    }

    for (
      var indexLong = shortStr.length;
      indexLong < longStr.length;
      indexLong++
    ) {
      var cAfter = parseInt(longStr.charAt(indexLong)) + carry;
      if (cAfter > 1) {
        carry = 1;
        cAfter = cAfter % 2;
      } else {
        carry = 0;
      }
      sumStr = cAfter + sumStr;
    }

    const lastResult = (carry === 1 ? carry : "") + sumStr;

    setResult(lastResult);
  };

  return (
    <div className={style.leetCode}>
      <h2>LeetCode 67. Add Binary</h2>
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

export default LeetCode67;
