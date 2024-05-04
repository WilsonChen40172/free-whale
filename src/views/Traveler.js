import React, { useEffect } from "react";

const Traveler = () => {
    useEffect(() => {
        // 使用瀏覽器 API 更新文件標題
        document.title = "Free Whale";

    });
    return (
        <div className={"Home"}>
            <div className={"fullPage"}>
            <p className="title">Kyoto and Osaka's Vlog</p>
                <iframe className="full-16-9" width="560" height="315" src="https://www.youtube.com/embed/Ozo9otz36Hw?si=vKFtUYYa_xroMhyp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className={"fullPage pinkBackground"}>
                <p className="title">Kyoto and Osaka's Vlog Day4</p>
                <iframe className="full-16-9" width="560" height="315" src="https://www.youtube.com/embed/GW8LC-8tpGg?si=l8KmxIP4aarobxjc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>

    );
};

export default Traveler;
