import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Home(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(props);
        console.log("use effect");
        return () => {
            console.log(props);
        }
    }, [])
    return (
        <div className="Home">
            <Button onClick={() => setCount(count + 1)}>頂{count}次屁屁</Button>
        </div>
    );
}

export default Home;
