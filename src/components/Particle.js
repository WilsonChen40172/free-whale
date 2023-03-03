import React from "react";
import "./Particle.scss";

const Particle = () => {
  return (
    <div className="Particle" style={{ display: "none" }}>
      <div className="dots">
        <FontAwesomeIcon icon={faList} className="cursor-pointer fs-3" />
      </div>
    </div>
  );
};

export default Particle;
