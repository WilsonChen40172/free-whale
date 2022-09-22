import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";

const NotFound = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "Error Page";
    // console.log(parseFloat(1.4000000000000001.toPrecision(12)) === 1.4);  // True)
  });
  return (
    <div className={style.notFound}>
      <p>Page Not Found</p>
      <Link to="/">Back To Home</Link>
    </div>
  );
};

export default NotFound;
