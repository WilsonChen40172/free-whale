import React, { useEffect } from "react";
import style from "./UserForm.module.scss";

const UserForm = () => {
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = "User Form";
    getLocalStorage();
  });

  const getLocalStorage = () => {};

  return (
    <div className={style.UserForm+" container section"}>
      <div className="formTable">
        <div className="input-group input-group-half">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="moneyYear">
              咕嚕咕嚕
            </label>
          </div>
          <input
            id="moneyYear"
            type="number"
            className={
              "form-control stock-input-style " + style["stock-input-style"]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
