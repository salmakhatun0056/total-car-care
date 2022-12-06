import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    // console.log(order)
    const stripe = useStripe()
    const elements = useElements()
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [procesing, setProcessing] = useState(false)

    const { _id, price, email, toolName, name, orderQty } = order;
    useEffect(() => {
        fetch('https://totalcar-care.up.railway.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                        // orderQty: orderQty,
                        // price: price
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent)
            setSuccess('Congrats ! your success is completed')
            //  STOR PAYMENT
            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
                paid: 'pending'

            }
            fetch(`https://totalcar-care.up.railway.app/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            }).then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data)
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-2' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-success'>
                    <p>{success}</p>
                    <p>Your Transaction id : <span className='text-orange-500'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;