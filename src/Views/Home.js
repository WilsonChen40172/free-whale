import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import "./Home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import Navbar from "../conponents/Navbar";

const Home = (props) => {
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
        <div className="Home">
            <Navbar></Navbar>
            <div className="section">
                <Button onClick={() => setCount(count + 1)}>頂{count}次屁屁</Button>
            </div>
            <div className="section">
            </div>
        </div>
    );
}

export default Home;
