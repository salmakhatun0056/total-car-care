import React from 'react';
import BusinessSummary from './BusinessSummary';
import Frequently from './Frequently';
import Landing from './Landing';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <BusinessSummary></BusinessSummary>
            {/* <Reviews></Reviews>
            <Frequently></Frequently> */}
        </div>
    );
};

export default Home;