import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode242 = () => {

  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode242";
  });

  const [stringS, setStringS] = useState("");
  const [stringT, setStringT] = useState("");
  const [result, setResult] = useState("true");

  const compare = () => {
    if (stringS.length !== stringT.length) {
      setResult("false");
      return false;
    }
    const thisS = stringS.split("").sort().join("");
    const thisT = stringT.split("").sort().join("");
    setResult(String(thisS === thisT));
  };

  return (
    <div className={style.leetcode}>
      <h2>LeetCode 242. Valid Anagram.</h2>
      <div className="leetCodeTopic">
        <p>
          Given two strings s and t, write a function to determine if t is an
          anagram of s. For example, s = "anagram", t = "nagaram", return true.
          s = "rat", t = "car", return false. Note: You may assume the string
          contains only lowercase alphabets.
        </p>
      </div>
      <div className="leetCodeAnswer">
        <div className="inputTable">
          <div className="half mb-3">
            <label htmlFor="s">String S</label>
            <input
              type="text"
              id="s"
              value={stringS}
              className="form-control"
              onChange={(event) => setStringS(event.target.value)}
            />
          </div>
          <div className="half mb-3">
            <label htmlFor="t">String T</label>
            <input
              type="text"
              id="t"
              value={stringT}
              className="form-control"
              onChange={(event) => setStringT(event.target.value)}
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

export default LeetCode242;
