import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LeetCodeHome from "./LeetCodePage/LeetCodeHome";
import LeetCode38 from "./LeetCodePage/LeetCode38";
import LeetCode58 from "./LeetCodePage/LeetCode58";
import LeetCode242 from "./LeetCodePage/LeetCode242";
import LeetCode344 from "./LeetCodePage/LeetCode344";
import LeetCode345 from "./LeetCodePage/LeetCode345";

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
    case "38":
      return <LeetCode38></LeetCode38>;
    case "58":
      return <LeetCode58></LeetCode58>;
    case "242":
      return <LeetCode242></LeetCode242>;
    case "344":
      return <LeetCode344></LeetCode344>;
    case "345":
      return <LeetCode345></LeetCode345>;

    default:
      return <LeetCodeHome></LeetCodeHome>;
  }
};

export default LeetCode;
