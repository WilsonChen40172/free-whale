// import GlobalMethod from "../global/GlobalMethod";
import React, { useEffect } from "react";

const AudioEffects = () => {
  useEffect(() => {
    //did mount
    document.title = "F2E";
    return () => {
      //will mount
    };
  }, []);
  return <section>
    
  </section>;
};

export default AudioEffects;
