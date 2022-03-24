import React, { useState, useEffect } from "react";

const Stock = () => {
  const [maxNumber, setMaxNumber] = useState(0);
  const [minNumber, setMinNumber] = useState(0);
  const [goldenSection, setGoldenSection] = useState(0);

  const controlGsObject = [1, 0.79, 0.618, 0.5, 0.382, 0.21];

  useEffect(() => {
    //did mount

    return () => {
      //will mount
    };
  }, []);
  return (
    <div className="stock container">
      <div class="row">
        <div class="col"></div>
      </div>
      <div id="gold" className="section">
        <p className="title">黃金分割率</p>
        <div className="inputBox">
          <div className="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" htmlFor="maxNumber">
                最高股價
              </label>
            </div>
            <input
              id="maxNumber"
              type="text"
              placeholder="最高股價"
              onChange={(e) => setMaxNumber(e.target.value)}
              value={maxNumber}
              className="form-control"
            />
          </div>
          <div className="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text" htmlFor="minNumber">
                最低股價
              </label>
            </div>
            <input
              id="minNumber"
              type="text"
              placeholder="最低股價"
              onChange={(e) => setMinNumber(e.target.value)}
              value={minNumber}
              className="form-control"
            />
          </div>
          <div className="input-group">
            <div class="input-group-prepend">
              <label class="input-group-text">黃金分割</label>
            </div>
            <select
              name=""
              id=""
              onChange={(e) => setGoldenSection(e.target.value)}
              className="form-select"
            >
              {controlGsObject.map((value) => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <span>
              參考抄底價：{maxNumber - (maxNumber - minNumber) * goldenSection}
            </span>
          </div>
        </div>
      </div>

      <div id="retire"></div>
    </div>
  );
};

export default Stock;
