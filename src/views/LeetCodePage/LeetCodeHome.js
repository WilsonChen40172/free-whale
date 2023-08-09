import React, { useEffect } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCodeHome = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode Home";
  });

  return (
    <div className={style.leetCode}>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/1"}>
        No.1 比對相等兩數字相加
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/7"}>
        No.7 反轉INT整數
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/14"}>
        No.14 找共同字串
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/38"}>
        No.38 幾個數字幾個數字幾個數字
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/58"}>
        No.58 最後一個單詞的長度
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/67"}>
        No.67 二進制相加
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/125"}>
        No.125 字串是否回文
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/242"}>
        No.242 比較兩個字串是否回文
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/344"}>
        No.344 字串反轉
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/345"}>
        No.345 母音反向代回
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/0"}>
        Back
      </Link>
    </div>
  );
};

export default LeetCodeHome;
