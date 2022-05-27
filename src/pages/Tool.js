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
            <div className="card w-96 bg-base-100 shadow-xl mt-8">
                <figure className="px-10 pt-10">
                    <img style={{ width: '150px', height: '200px' }} src={img} alt="car-tools" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title">Name: {name}</h2>
                    <p className='text-error'>Price: ${price} </p>
                    <p>Tools Description: {description}</p>
                    <p> {minimum} piece (Minimum order)</p>
                    <p>{available} piece (Our available quantity)</p>
                    <div className="card-actions">
                        <button onClick={() => handelPurchaseButton(_id)} className='btn btn-primary text-white fw-bold'>PURCHASE NOW: {name}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;