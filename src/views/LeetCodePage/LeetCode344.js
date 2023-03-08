import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode344 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode344";
  });

  const [practiceString, setPracticeString] = useState("");
  const [returnArray, setReturnArray] = useState("");

  const compare = () => {
    const thisString = practiceString.split("");
    const thisPushCount = [];
    for (let indexPra = 1; indexPra <= thisString.length; indexPra++) {
      thisPushCount.push(thisString[thisString.length - indexPra]);
    }
    setReturnArray(thisPushCount);
  };

  return (
    <div className={style.leetCode}>
      <h2>LeetCode 344. Valid Anagram.</h2>
      <div className="leetCodeTopic">
        <p>
          Write a function that takes a string as input and returns the string
          reversed. Example: Given s = "hello", return "olleh".
        </p>
      </div>
      <div className={"leetCodeAnswer " + style.leetCodeTopic}>
        <div className="half mb-3">
          <input
            type="text"
            id="practiceString"
            value={practiceString}
            className="form-control"
            onChange={(event) => setPracticeString(event.target.value)}
          />
        </div>
        <button onClick={compare} className="btn defaultButton mb-3">
          Run
        </button>
        <font className="d-block" size="3">
          Result:<span>{returnArray}</span>
        </font>
        <Link to={"/f2e/LeetCode/0"}>Back</Link>
      </div>
    </div>
  );
};

export default LeetCode344;
