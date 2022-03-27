import React, { useState, useEffect } from "react";

const Stock = (props) => {
  //最高價
  const [maxNumber, setMaxNumber] = useState(0);
  //最低價
  const [minNumber, setMinNumber] = useState(0);
  //黃金分割率
  const [goldenSection, setGoldenSection] = useState(0);
  //控制黃金分割率數值
  const controlGsArray = [1, 0.79, 0.618, 0.5, 0.382, 0.21];

  //每年存多少錢
  const [moneyYear, setMoneyYear] = useState(0);
  //每年多少％
  const [percentYear, setPercentYear] = useState(0);
  //存幾年
  const [whenYear, setWhenYear] = useState(0);
  //總共可存
  // const [total, setTotal] = useState(0);

  // 相似於 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = `股票相關`;
  });

  const calculation = () => {
    //每個月存多少錢
    let a_year_money = Number(moneyYear);
    //每年賺多少%數
    const percentage =
      1 + Number(percentYear) / 100;
    //幾年
    const year = Number(whenYear);

    let total = 0;
    for (let index = 1; index <= year; index++) {
      total += a_year_money * Math.pow(percentage, index);
    }
    // document.getElementById("pension").innerHTML = total;
    // document.getElementById("dividends").innerHTML =
    //   total * Number(document.getElementById("percentage").value / 100);
    return total;
  }

  return (

    <div className="stock container">
      <div id="gold" className="section">
        <p className="title">黃金分割率</p>
        <div className="inputBox">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="maxNumber">
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
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="minNumber">
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
            <div className="input-group-prepend">
              <label className="input-group-text">黃金分割</label>
            </div>
            <select
              name=""
              id=""
              onChange={(e) => setGoldenSection(e.target.value)}
              className="form-select"
            >
              {controlGsArray.map((value) => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <span className="p-2">
              參考價：{maxNumber - (maxNumber - minNumber) * goldenSection}
            </span>
          </div>
        </div>
      </div>

      <div id="retire" className="section">
        <p className="title">退休金計算</p>
        <div className="inputBox">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="moneyYear">
                每年多少錢
              </label>
            </div>
            <input
              id="moneyYear"
              type="text"
              placeholder="每年多少錢"
              onChange={(e) => setMoneyYear(e.target.value)}
              value={moneyYear}
              className="form-control"
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="percentYear">
                每年多少％
              </label>
            </div>
            <input
              id="percentYear"
              type="text"
              placeholder="每年多少％"
              onChange={(e) => setPercentYear(e.target.value)}
              value={percentYear}
              className="form-control"
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="whenYear">
                存幾年
              </label>
            </div>
            <input
              id="whenYear"
              type="text"
              placeholder="存幾年"
              onChange={(e) => setWhenYear(e.target.value)}
              value={whenYear}
              className="form-control"
            />
          </div>
          <div className="input-group">
            <span className="p-2">
              {whenYear}年後可存：{calculation()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
