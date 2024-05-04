import React, { useEffect } from "react";

const Dance = () => {
    useEffect(() => {
        // 使用瀏覽器 API 更新文件標題
        document.title = "Free Whale";

    });
    return (
        <div className={"Home"}>
            <div className={"fullPage pinkBackground"}>
                <p className="title">IP - Back To The Dance【Try Again】(Youei & Dino)</p>
                <iframe className="full-16-9" width="560" height="315" src="https://www.youtube.com/embed/Fw2bV83ycrA?si=U-rVyUPr6v5ksnzD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className={"fullPage"}>
                <p className="title">IP - Back to the Dance (Youei & Dino)</p>
                <iframe className="full-16-9" width="560" height="315" src="https://www.youtube.com/embed/jIpv1urrAAI?si=tqXZ3dz6zDBw_bi2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className={"fullPage pinkBackground"}>
                <p className="title">IP - Hiphop《昂首闊步》(Youei & Dino)</p>
                <iframe className="full-16-9" width="560" height="315" src="https://www.youtube.com/embed/oVwXczXUxog?si=9ynqRSFww5Kqxjz7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className={"fullPage"}>
                <p className="title">IP - Be the classic (Youei & Dino)</p>
                <iframe className="full-16-9" width="560" height="315" src="https://www.youtube.com/embed/hSlHqP37UYc?si=x6gAoR0HcUKcQYOz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className={"fullPage pinkBackground"}>
                <p className="title">IP - 拾伍歲「台客。我。拾伍歲。」(MASK)</p>
                <iframe className="full-16-9" width="560" height="315" src="https://www.youtube.com/embed/gwD2Qh8iu_s?si=2F_Y9IQj2xAlZVxn" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className={"fullPage"}>
                <p className="title">IP - 第十二屆表演班成果展 (Takae小繪)</p>
                <iframe className="full-16-9" width="560" height="315" src="https://www.youtube.com/embed/x7h_U5UkBp4?si=8qdDOIanl0-N6pka" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className={"fullPage pinkBackground"}>
                <p className="title">IP - 冬季表演班成果展 (Youei & Dino)</p>
                <iframe className="full-16-9" width="560" height="315" src="https://www.youtube.com/embed/wNbxTJzPb2Q?si=a5i_CXuQSanbJxoo&amp;start=296" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>

    );
};

export default Dance;
