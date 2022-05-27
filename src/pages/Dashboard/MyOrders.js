import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';

const MyOrders = ({ user }) => {
    console.log(user)
    const myOrders = useQuery('myOrder', () => fetch(`http://localhost:5000/orders/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))
    console.log(myOrders)
    if (myOrders.isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                myOrders.refetch()
            })
    }
    return (
        <div className="overflow-x-auto mt-6">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Tool Name</th>
                        <th>Price</th>
                        <th>Order Qty</th>
                        <th>Total Price</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myOrders.data.map((order, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.toolName}</td>
                                <td>${order.price}</td>
                                <td>${order.orderQty}</td>
                                <td>${order.orderQty * order.price}</td>
                                <td>
                                    {
                                        !order.paid ? <button className='btn btn-primary'>Proceed to pay</button>
                                            : order.paid
                                    }
                                </td>
                                <td><button onClick={() => handleDelete(order._id)} className='btn btn-primary'>Cancel</button></td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;