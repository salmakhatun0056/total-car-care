import React from 'react';
import Frequently from './Frequently';
import Landing from './Landing';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Reviews></Reviews>
            <Frequently></Frequently>
        </div>
    );
};

export default Home;