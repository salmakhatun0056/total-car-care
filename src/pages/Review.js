import React from 'react';

const Review = ({ review }) => {
    const { description, ratings } = review
    return (
        <div class="card w-96 bg-base-100 shadow-xl mt-5">
            <div class="card-body">
                <h2 class="card-title">Ratings: {ratings}</h2>
                <p>Description: {description}</p>
            </div>
        </div>
    );
};

export default Review;