import React, { useEffect } from "react";

const Html = () => {
  useEffect(() => {
    //did mount
    document.title = "Html";
    return () => {
      //will mount
    };
  }, []);

  return <div className={"Home"}></div>;
};

export default Html;
