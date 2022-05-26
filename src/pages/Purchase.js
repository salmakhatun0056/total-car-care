// import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const Purchase = ({ user }) => {
    const { id } = useParams()

    const tool = useQuery('tool', () => fetch(`http://localhost:5000/get-tool/${id}`)
        .then(res => res.json()))

    if (tool.isLoading) {
        return <Loading></Loading>
    }
    const { name, img, price, description, minimum, available } = tool.data

    return (

        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col ">
                <div class="text-center lg:text-left">
                    <h1 class="text-3xl text-primary font-bold">Purchase the product</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div className="from-control">
                            <img src={img} alt="" />
                        </div>

                        <div className="from-control">
                            <h1 className='card-title'>{name}</h1>
                            <h2>{description}</h2>
                            <h2>Price: {price} per piece</h2>
                            <h2>Minimum Order:  {minimum}pcs</h2>
                            <h2>Available Qty:  {available}pcs</h2>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" value={user.displayName} disabled class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <input type="text" value={user.email} disabled class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Order Quantity</span>
                            </label>
                            <input type="number" min={minimum} max={available} placeholder={minimum} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Address</span>
                            </label>
                            <input type="text" class="input input-bordered" />
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Please Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;