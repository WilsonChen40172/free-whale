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
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/14"}>
        No.14
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/38"}>
        No.38
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/58"}>
        No.58
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/67"}>
        No.67
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/125"}>
        No.125
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/242"}>
        No.242
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/344"}>
        No.344
      </Link>
      <Link className={style.leetCodeTitle} to={"/f2e/LeetCode/345"}>
        No.345
      </Link>
    </div>
  );
};

export default LeetCodeHome;
