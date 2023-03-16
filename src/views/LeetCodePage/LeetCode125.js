import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode125 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode125";
  });

  const [inputStringA, setInputStringA] = useState("");
  const [result, setResult] = useState("");

  const compare = () => {
    //轉小寫
    let smallString = inputStringA.toLowerCase();
    console.log(smallString);
    //去掉其他非英文字數字
    let noPointString = smallString.replace(/[^a-z0-9]/gi, "");
    let reverseString = noPointString.split("").reverse().join("");
    if (noPointString.indexOf(reverseString) === 0) {
      setResult("true");
    } else {
      setResult("false");
    }
  };

  return (
    <div className={style.leetCode}>
      <h2>LeetCode 125. Valid Palindrome</h2>
      <div className="leetCodeTopic">
        <p>
          Given a string, determine if it is a palindrome, considering only
          alphanumeric characters and ignoring cases. For example, "A man, a
          plan, a canal: Panama" is a palindrome. "race a car" is not a
          palindrome. Note: Have you consider that the string might be empty?
          This is a good question to ask during an interview. For the purpose of
          this problem, we define empty string as valid palindrome.
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

export default LeetCode125;
