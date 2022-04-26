import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <p>404 Not Found</p>
            <p>Error Page</p>
            <Link to="/">回首頁</Link>
        </div>
    );
}

export default NotFound;
