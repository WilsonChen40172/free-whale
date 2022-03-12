import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    const [count, setCount] = useState(props.value);
    useEffect(() => {
        //did mount
        console.log(props);
        console.log("use effect");
        return () => {
            //will mount
            console.log(props);
        }
    }, [props.value])

    return (
        <div className="navbar">
            <div className="dots">
                <FontAwesomeIcon icon={faList} className="cursor-pointer fs-3" />
            </div>
        </div>
    );
}

export default Navbar;
