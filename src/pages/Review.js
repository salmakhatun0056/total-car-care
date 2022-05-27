import React from 'react';

const Review = ({ review }) => {
    const { description, ratings } = review
    return (
        <div className="card w-96 bg-accent shadow-xl mt-5">
            <div className="card-body">
                <h2 className="card-title">Ratings: {ratings}</h2>
                <p>Description: {description}</p>
            </div>
        </div>
    );
};

export default Review;