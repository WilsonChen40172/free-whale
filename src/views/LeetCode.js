import React, { useEffect, useState } from "react";
import style from "./LeetCode.module.scss";

const LeetCode = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode";
  });
  const [stringS, setStringS] = useState("");
  const [stringT, setStringT] = useState("");
  const [result, setResult] = useState("false");

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
    <div className={"container "+style.leetcode}>
      <p className="leetCodeTitle">LeetCode 242. Valid Anagram</p>
      <div className="leetCodeTopic">
        <p>
          Given two strings s and t, write a function to determine if t is an
          anagram of s. For example, s = "anagram", t = "nagaram", return true.
          s = "rat", t = "car", return false. Note: You may assume the string
          contains only lowercase alphabets.
        </p>
      </div>
      <div className="leetCodeAnswer">
        <input
          type="text"
          id="s"
          value={stringS}
          className="form-control"
          onChange={(event) => setStringS(event.target.value)}
        />
        <input
          type="text"
          id="t"
          value={stringT}
          className="form-control"
          onChange={(event) => setStringT(event.target.value)}
        />
        <button onClick={compare} className="btn btn-danger">Run</button>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default LeetCode;
