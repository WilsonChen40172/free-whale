import React, { useEffect } from "react";
import style from "../LeetCode.module.scss";
import { Link } from "react-router-dom";

const LeetCode242 = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode Home";
  });

  
  return (
    <div className={style.leetCode}>
        <Link to={"/f2e/LeetCode/242"}>No.242</Link>
        <Link to={"/f2e/LeetCode/344"}>No.344</Link>
    </div>
  );
};

export default LeetCode242;
