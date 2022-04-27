import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "Error Page";
    // console.log(parseFloat(1.4000000000000001.toPrecision(12)) === 1.4);  // True)
  });
  return (
    <div className="notFound">
      <p>404 Not Found</p>
      <p>Error Page</p>
      <Link to="/">回首頁</Link>
    </div>
  );
};

export default NotFound;
