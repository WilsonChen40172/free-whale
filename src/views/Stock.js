import React, { useState, useEffect } from "react";
import style from "./Stock.module.scss";

const Stock = () => {
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

  //語言包
  const [languageBag, setLanguageBag] = useState({
    gr: "Golden Ratio",
    maxNumber: "Highest Price",
    minNumber: "Lowest Price",
    reference: "Reference",
    pc: "Pensions Calculate",
    moneyYear: "money/Year",
    py: "％/Year",
    whenYear: "WhenYear",
    endMoney: "years ago money",
  });

  // 相似於 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "Stock";
    // console.log(parseFloat(1.4000000000000001.toPrecision(12)) === 1.4);  // True)
    // changeLanguage("0");
  }, []);

  const calculation = () => {
    //每個月存多少錢
    let a_year_money = Number(moneyYear);
    //每年賺多少%數
    const percentage = 1 + Number(percentYear) / 100;
    //幾年
    const year = Number(whenYear);

    let total = 0;
    for (let index = 1; index <= year; index++) {
      total += a_year_money * Math.pow(percentage, index);
    }
    // document.getElementById("pension").innerHTML = total;
    // document.getElementById("dividends").innerHTML =
    //   total * Number(document.getElementById("percentage").value / 100);
    return parseFloat(total.toPrecision(12));
  };

  const changeLanguage = (e) => {
    const thisControlNumber = e;
    switch (thisControlNumber) {
      case "0":
        setLanguageBag({
          gr: "Golden Ratio",
          maxNumber: "Highest Price",
          minNumber: "Lowest Price",
          reference: "Reference",
          pc: "Pensions Calculate",
          moneyYear: "money/Year",
          py: "％/Year",
          whenYear: "WhenYear",
          endMoney: "years ago money",
        });
        break;
      case "1":
        setLanguageBag({
          gr: "黃金分割率",
          maxNumber: "最高股價",
          minNumber: "最低股價",
          reference: "合理價",
          pc: "退休金計算",
          moneyYear: "一年存多少",
          py: "一年多少％",
          whenYear: "存幾年",
          endMoney: "年後存錢",
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className={"container " + style.stock}>
      <div id="gold" className="section">
        <div>
          <select
            onChange={(e) => {
              changeLanguage(e.target.value);
            }}
            name=""
            id=""
            className="form-select input-bkcolor"
          >
            <option value="0">English</option>
            <option value="1">繁體中文</option>
          </select>
        </div>
        <p className="title">{languageBag.gr}</p>
        <div className="inputBox">
          <div className="input-group">
            <div className={style["input-group-prepend"]}>
              <label className="input-group-text" htmlFor="maxNumber">
                {languageBag.maxNumber}
              </label>
            </div>
            <input
              id="maxNumber"
              type="text"
              placeholder={languageBag.maxNumber}
              onChange={(e) => setMaxNumber(e.target.value)}
              value={maxNumber}
              className="form-control input-bkcolor"
            />
          </div>
          <div className="input-group">
            <div className={style["input-group-prepend"]}>
              <label className="input-group-text" htmlFor="minNumber">
                {languageBag.minNumber}
              </label>
            </div>
            <input
              id="minNumber"
              type="text"
              placeholder={languageBag.minNumber}
              onChange={(e) => setMinNumber(e.target.value)}
              value={minNumber}
              className="form-control input-bkcolor"
            />
          </div>
          <div className="input-group">
            <div className={style["input-group-prepend"]}>
              <label className="input-group-text">{languageBag.gr}</label>
            </div>
            <select
              name=""
              id=""
              onChange={(e) => setGoldenSection(e.target.value)}
              className="form-select input-bkcolor"
            >
              {controlGsArray.map((value) => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <span className="p-2">
              {languageBag.reference}:
              {maxNumber - (maxNumber - minNumber) * goldenSection}
            </span>
          </div>
        </div>
      </div>

      <div id="retire" className="section">
        <p className="title">{languageBag.pc}</p>
        <div className="inputBox">
          <div className="input-group">
            <div className={style["input-group-prepend"]}>
              <label className="input-group-text" htmlFor="moneyYear">
                {languageBag.moneyYear}
              </label>
            </div>
            <input
              id="moneyYear"
              type="text"
              placeholder={languageBag.moneyYear}
              onChange={(e) => setMoneyYear(e.target.value)}
              value={moneyYear}
              className="form-control input-bkcolor"
            />
          </div>
          <div className="input-group">
            <div className={style["input-group-prepend"]}>
              <label className="input-group-text" htmlFor="percentYear">
                {languageBag.py}
              </label>
            </div>
            <input
              id="percentYear"
              type="text"
              placeholder={languageBag.py}
              onChange={(e) => setPercentYear(e.target.value)}
              value={percentYear}
              className="form-control input-bkcolor"
            />
          </div>
          <div className="input-group">
            <div className={style["input-group-prepend"]}>
              <label className="input-group-text" htmlFor="whenYear">
                {languageBag.whenYear}
              </label>
            </div>
            <input
              id="whenYear"
              type="text"
              placeholder={languageBag.whenYear}
              onChange={(e) => setWhenYear(e.target.value)}
              value={whenYear}
              className="form-control input-bkcolor"
            />
          </div>
          <div className="input-group">
            <span className="p-2">
              {whenYear}
              {languageBag.endMoney}：{calculation()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
