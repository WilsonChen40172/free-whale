import React, { useState, useEffect } from "react";
// import style from "./LeetCode.module.scss";
import style from "./F2E.module.scss";
// import { Link } from "react-router-dom";

const CodeNote = () => {
    // 使用瀏覽器 API 更新文件標題
    useEffect(() => {
        document.title = "程式筆記";
    }, []);

    // 創造一副牌
    let thisPoker = [];
    for (let pokerType of ['Hart', 'Club', 'Diamond', 'Spade']) {
        for (let pokerNum = 1; pokerNum <= 13; pokerNum++) {
            thisPoker.push({ pokerType, pokerNum });
        }
    }

    const [pokers, setPokers] = useState(thisPoker);
    const [showPokers, setShowPokers] = useState([]);

    // useEffect(() => {
    //     console.log(pokers);
    //     pokers.map((_, card) => (
    //         console.log(card.pokerNum)
    //     ))
    // }, []);

    const getCardType = (cardType) => {
        let getCards = pokers.filter(card => card.pokerType === cardType);
        setShowPokers(getCards);
        console.log(showPokers);
    }

    const getCardNum = (cardNum) => {
        let getCards = pokers.filter(card => card.pokerNum === cardNum);
        setShowPokers(getCards);
        console.log(showPokers);
    }

    useEffect(() => {
        const arr = [1, 3, 5, 6];
        const sum = arr.reduce((a, x) => a += x, 0);
        console.log(sum);

    }, []);

    return (
        <div className={style.F2E + " flex-all-center vh-100"}>
            {/* {showPokers.map((card) => (
                <div key={card}>
                    <span>{card.pokerNum}</span>
                    <span>{card.pokerType}</span>
                </div>
            ))} */}

            <button className="btn defaultButton mb-3" onClick={() => getCardType("Diamond")}>
                Get All Diamonds
            </button>
            <button className="btn defaultButton mb-3" onClick={() => getCardNum(10)}>
                Get All 10
            </button>
        </div>
    );
};

export default CodeNote;
