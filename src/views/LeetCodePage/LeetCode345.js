import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode345 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode345";
  });

  const [practiceString, setPracticeString] = useState("");
  const [returnCount, setReturnCount] = useState("");

  const compare = () => {
    const savingArray = [];
    const handleArray = practiceString.split("");
    //找出母音 存入savingArray
    for (let index = 0; index < handleArray.length; index++) {
      if (/^[aeiou]$/i.test(handleArray[index])) {
        savingArray.push(handleArray[index]);
      }
    }
    // savingArray數量有多少
    var indexNow = savingArray.length - 1;
    //再跑一次 把母音相反放入
    for (let index = 0; index < handleArray.length; index++) {
      if (/^[aeiou]$/i.test(handleArray[index])) {
        handleArray[index] = savingArray[indexNow];
        indexNow--;
      }
    }
    //改變ReturnCount
    setReturnCount(handleArray.join(''));
  };

  return (
    <div className={style.leetCode}>
      <h2>LeetCode 345. Valid Anagram.</h2>
      <div className="leetCodeTopic">
        <p>
          Write a function that takes a string as input and reverse only the
          vowels of a string. Example 1: Given s = "hello", return "holle".
          Example 2: Given s = "leetcode", return "leotcede". Note: The vowels
          does not include the letter "y".
        </p>
      </div>
      <div className={"leetCodeAnswer " + style.leetCodeTopic}>
        <div className="half mb-3">
          <input
            type="text"
            id=""
            value={practiceString}
            className="form-control"
            onChange={(event) => setPracticeString(event.target.value)}
          />
        </div>
        <button onClick={compare} className="btn defaultButton mb-3">
          Run
        </button>
        <font className="d-block" size="3">
          Result:<span>{returnCount}</span>
        </font>
        <Link to={"/f2e/LeetCode/0"}>Back</Link>
      </div>
    </div>
  );
};

export default LeetCode345;
