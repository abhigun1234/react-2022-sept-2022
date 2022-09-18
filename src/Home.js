import React from 'react';
import './home.css';
function Home(props) {
    console.log("data",props)
    return (
        <div className='home'>
            Home
            <h1>{props.name}</h1>
        </div>
    );
}

export default Home;