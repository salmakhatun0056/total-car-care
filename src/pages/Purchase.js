// import React, { useEffect, useState } from 'react';
import { async } from '@firebase/util';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const Purchase = ({ user }) => {
    const { id } = useParams()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const tool = useQuery('tool', () => fetch(`http://localhost:5000/get-tool/${id}`)
        .then(res => res.json()))

    if (tool.isLoading) {
        return <Loading></Loading>
    }
    const { name, img, price, description, minimum, available } = tool.data

    const onSubmit = async data => {
        const order = {
            toolImage: img,
            orderQty: data.orderQty,
            price: price,
            toolName: name,
            name: user.displayName,
            email: user.email,
            address: data.address,
            phoneNumber: data.phone
        }
        console.log(order)
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('Order Success')
            })
    };

    return (

        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col ">
                <div class="text-center lg:text-left">
                    <h1 class="text-3xl text-primary font-bold">Purchase the product</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} class="card-body">
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
                                <span class="label-text">Order Quantity</span>
                            </label>
                            <input {...register("orderQty")} type="number" min={minimum} max={available} defaultValue={minimum} class="input input-bordered" />
                        </div>
                        <div className=" text-center mt-2 text-xl">Your Information</div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input {...register("name")} type="text" value={user.displayName} class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <input {...register("email")} type="text" value={user.email} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Address</span>
                            </label>
                            <input {...register("address")} type="text" class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone Number</span>
                            </label>
                            <input {...register("number")} type="text" class="input input-bordered" />
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Please Order Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;