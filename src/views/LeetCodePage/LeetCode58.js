import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode58 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode38";
  });

  const [inputString, setInputString] = useState("Hello World ");
  const [result, setResult] = useState("");

  const compare = () => {
    const englishWords = inputString.split(" ");
    // console.log(englishWords);

    for (let index = englishWords.length - 1; index >= 0; index--) {
      if (englishWords[index] === "") {
      } else {
        setResult(englishWords[index].length);
        break;
      }
    }
  };

  return (
    <div className={style.leetCode}>
      <h2>LeetCode 58. Length of Last Word.</h2>
      <div className="leetCodeTopic">
        <p>
          Given a string s consists of upper/lower-case alphabets and empty
          space characters ' ', return the length of last word in the string. If
          the last word does not exist, return 0. Note: A word is defined as a
          character sequence consists of non-space characters only. For example,
          Given s = "Hello World", return 5.
        </p>
      </div>
      <div className={"leetCodeAnswer " + style.leetCodeTopic}>
        <div className="inputTable">
          <div className="half mb-3">
            <input
              type="text"
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
        <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/0"}>Back</Link>
      </div>
    </div>
  );
};

export default LeetCode58;
