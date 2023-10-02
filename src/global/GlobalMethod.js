//全域方法

//判斷api打位置 true="" false=20
let productionLink = "";

//判斷是否正式機
if (window.location.hostname === "wilsonchen40172.github.io") {
  //
  productionLink = "/free-whale/build";
} else {
  //
  productionLink = "";
}

//api要去哪兒
const apiLinkDevOrProduction = productionLink;

const GlobalMethod = {
  //判斷是否正式機 API判斷
  myVideoOfficialMachine: () => {
    let booleanOfficialMachine = "";
    //判斷是否正式機
    if (window.location.hostname === "wilsonchen40172.github.io") {
      booleanOfficialMachine = "/free-whale/build";
    } else {
      booleanOfficialMachine = "";
    }
    return booleanOfficialMachine;
  },

  getNewToken: async () => {
    const apiLink = apiLinkDevOrProduction + "/rest/token/getNewToken";
    const returnObject = await fetch(apiLink, {
      method: "GET",
      // headers 加入 json 格式
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        terminal: "PC",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        return jsonData;
      })
      .catch((err) => {
        return err;
      });

    return returnObject;
  },
};

export default GlobalMethod;
