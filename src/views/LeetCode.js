import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LeetCodeHome from "./LeetCodePage/LeetCodeHome";
import LeetCode242 from "./LeetCodePage/LeetCode242";

const LeetCode = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode";
  });

  const { topicNumber } = useParams();

  switch (topicNumber) {
    case "200":
      return (
        <div>
          <p>200</p>
        </div>
      );
      break;
    case "242":
      return <LeetCode242></LeetCode242>;
      break;

    default:
      return <LeetCodeHome></LeetCodeHome>;
      break;
  }
};

export default LeetCode;
