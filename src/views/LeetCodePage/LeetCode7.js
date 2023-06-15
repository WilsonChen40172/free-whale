import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode7 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode7";
  });

  const [inputString, setInputString] = useState(0);
  const [result, setResult] = useState(0);

  const compare = () => {
    let nowNum = inputString;
    let returnNum = 0;
    nowNum = nowNum.split("").reverse();
    // console.log(nowNum);
    // console.log(nowNum.length);
    // console.log(nowNum[nowNum.length - 1]);
    if (nowNum[nowNum.length - 1] === "-") {
      // unshift
      nowNum.pop();
      nowNum.unshift("-");
    }
    // console.log(nowNum);
    returnNum = nowNum;
    setResult(returnNum);
  };

  return (
    <div className={style.leetCode}>
      <h2>LeetCode 7. Reverse Integer.</h2>
      <div className="leetCodeTopic">
        <p>
          Reverse digits of an integer. Example1: x = 123, return 321 Example2:
          x = -123, return -321 Have you thought about this? Here are some good
          questions to ask before coding. Bonus points for you if you have
          already thought through this! If the integer's last digit is 0, what
          should the output be? ie, cases such as 10, 100. Did you notice that
          the reversed integer might overflow? Assume the input is a 32-bit
          integer, then the reverse of 1000000003 overflows. How should you
          handle such cases? For the purpose of this problem, assume that your
          function returns 0 when the reversed integer overflows.
        </p>
      </div>
      <div className={"leetCodeAnswer " + style.leetCodeTopic}>
        <div className="inputTable">
          <div className="half mb-3 d-flex">
            <input
              type="number"
              className="form-control"
              value={inputString}
              onChange={(event) => setInputString(event.target.value)}
            />
          </div>
          <div className="half mb-3"></div>
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

export default LeetCode7;
