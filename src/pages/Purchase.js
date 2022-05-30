// import React, { useEffect, useState } from 'react';
import { async } from '@firebase/util';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const Purchase = ({ user }) => {
    const { id } = useParams()
    const [success, setSuccess] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const tool = useQuery('tool', () => fetch(`https://ancient-caverns-35503.herokuapp.com/get-tool/${id}`)
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
        fetch('https://ancient-caverns-35503.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                setSuccess(result)
                if (!success) {
                    reset()
                    return toast('Order Success')
                }

                else {
                    reset()
                    toast("your order has not completed")
                }
            })


    };



    return (

        <div className="hero  bg-base-100">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl text-primary font-bold">Purchase the product</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>
                            <input {...register("orderQty")} type="number" min={minimum} max={available} defaultValue={minimum} className="input input-bordered" />
                        </div>
                        <div className=" text-center mt-2 text-xl">Your Information</div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("name")} type="text" value={user.displayName} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input {...register("email")} type="text" value={user.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input {...register("address")} type="text" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input {...register("number")} type="text" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Please Order Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;