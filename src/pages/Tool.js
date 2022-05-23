import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, price, description, minimum, available } = tool
    const navigate = useNavigate()
    const handelPurchaseButton = id => {
        navigate(`/tool/${id}`)
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mt-8">
                <figure class="px-10 pt-10">
                    <img src={img} alt="car-tools" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center ">
                    <h2 class="card-title">Name: {name}</h2>
                    <p className='text-error'>Price: ${price} </p>
                    <p>Tools Description: {description}</p>
                    <p>Minimum order quantity: {minimum} pic</p>
                    <p>Our available quantity {available} pic</p>
                    <div class="card-actions">
                        <button onClick={() => handelPurchaseButton(_id)} className='btn btn-info text-white fw-bold'>PURCHASE NOW: {name}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;