import React, { useEffect } from "react";

const Introduction = () => {
  useEffect(() => {
    //did mount
    document.title = "Introduction";
    return () => {
      //will mount
    };
  }, []);

  return (
    <div className={"Classic"}>
      <p className="title">前導</p>
      <p>1.網站架構</p>
      <p>2.需要技能</p>
      <p>3.其他簡介</p>
    </div>
  );
};

export default Introduction;
