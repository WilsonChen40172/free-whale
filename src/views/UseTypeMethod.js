// useCallback

import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
// import style from "./LeetCode.module.scss";
import style from "./F2E.module.scss";
// import { Link } from "react-router-dom";

const Child = memo((props) => {
  console.log(props);
  return (
    <div className={"text-center p-4"}>
      {props.list}
      <button className="btn defaultButton mb-3" onClick={props.handleChange}>
        ChildBtn
      </button>
      <button className="btn mb-3" onClick={props.onClick}>onClick</button>
    </div>
  );
});
const useTypeMethod = () => {
  // 使用瀏覽器 API 更新文件標題
  useEffect(() => {
    document.title = "LeetCode Map";
  }, []);

  const [count, setCount] = useState(0);

  const handleChange = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // useMemo -> list就不會每次重刷都重新render一次頁面
  const list = useMemo(() => {
    console.log("list");
    return <p>{count}</p>;
  }, []);

  const onClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <div className={style.F2E + " flex-all-center vh-100"}>
      {/* useCallback */}
      <div className={"text-center p-4"}>
        <p>{count}</p>
        <button
          className="btn defaultButton mb-3"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increase
        </button>
      </div>
      <Child handleChange={handleChange} list={list} onClick={onClick} />
    </div>
  );
};

export default useTypeMethod;
