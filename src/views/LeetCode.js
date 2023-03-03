import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LeetCodeHome from "./LeetCodePage/LeetCodeHome";
import LeetCode242 from "./LeetCodePage/LeetCode242";
import LeetCode344 from "./LeetCodePage/LeetCode344";

const LeetCode = () => {
  // const [parsed, setParsed] = useState("");

  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "LeetCode";
  });

  // setParsed(window.location.search);
  // console.log(parsed);

  const { topicNumber } = useParams();

  switch (topicNumber) {
    case "200":
      return (
        <div>
          <p>200</p>
        </div>
      );

    case "242":
      return <LeetCode242></LeetCode242>;

    case "344":
      return <LeetCode344></LeetCode344>;

    default:
      return <LeetCodeHome></LeetCodeHome>;
  }
};

export default LeetCode;
