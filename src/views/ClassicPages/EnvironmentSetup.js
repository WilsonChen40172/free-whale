import React, { useEffect } from "react";

const EnvironmentSetup = () => {
  useEffect(() => {
    //did mount
    document.title = "EnvironmentSetup";
    return () => {
      //will mount
    };
  }, []);

  return (
    <div className={"Home"}>
      <div className={"Classic"}>
        <p className="title">基礎環境建置</p>
        <p>1.Vs Code</p>
        <p>2.外掛套件</p>
      </div>
    </div>
  );
};

export default EnvironmentSetup;
