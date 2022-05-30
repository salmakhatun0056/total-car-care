import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/orders/${id}`
    const { data } = useQuery('orders', () => fetch(url).then(res => res.json()))
    return (
        <div>
            <h2>This is payment page: {id}</h2>
        </div>
    );
};

export default Payment;