import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L50dCLHH7hiFfq3eHNdf9JcKvX3XEiissb5hhf33UuBZuAmVj9hoTHy5qLsQWQlulqjuNan54qJshZazTTMGwgv00UKNtBJtN');

const Payment = ({ user }) => {
    const { id } = useParams()
    const url = `https://totalcar-care.up.railway.app/order/${id}`

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))
    // console.log(order)
    // console.log(id)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='hero h-screen'>
            <div className="card bg-base-100 p-6">

                <div className="card-body">
                    <h1 className='text-3xl text-primary'>Hello, {user.displayName}</h1>
                    <p className='text-2xl'>Please pay for: <span className='text-primary font-bold text-xl'>{order.toolName}</span></p><hr />
                    <p>Products: <span className='font-bold'>{order.toolName}</span></p><hr />
                    <p>Price Rate: <span className='font-bold'>{order.price}$ per piece</span></p><hr />
                    <p>Order Quantity: <span className='font-bold'>{order.orderQty} pieces</span></p><hr />
                    <p>Total: <span className='font-bold'>{order.orderQty * order.price} $</span></p><hr />
                    <div className='divider text-2xl'>Payment Details</div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;