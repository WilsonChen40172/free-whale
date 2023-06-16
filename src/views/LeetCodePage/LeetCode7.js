import React, { useEffect, useState } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode7 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode7";
  });

  const [inputNum, setInputNum] = useState(0);
  const [result, setResult] = useState(0);

  const compare = () => {
    let nowNum = inputNum;
    // //個位數不處理 回傳相同
    if (nowNum < 10 && nowNum > -10) {
      setResult(nowNum);
      return false;
    }

    if (nowNum > 0) {
      //直接反轉
      nowNum = nowNum.toString();
      nowNum = nowNum.split("").reverse().join("");
    } else {
      //成負一後反轉 加回負號
      nowNum *= -1;
      nowNum = nowNum.toString();
      nowNum = nowNum.split("").reverse().join("");
      nowNum = "-" + nowNum;
    }

    // console.log(parseInt(nowNum));
    setResult(parseInt(nowNum));
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
              value={inputNum}
              onChange={(event) => setInputNum(event.target.value)}
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
