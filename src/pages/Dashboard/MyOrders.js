import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

const MyOrders = ({ user }) => {
    console.log(user)
    const myOrders = useQuery('myOrder', () => fetch(`https://ancient-caverns-35503.herokuapp.com/orders/${user.email}`, {
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
        fetch(`https://ancient-caverns-35503.herokuapp.com/orders/${id}`, {
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
                        <th>Payment</th>
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
                                    {!order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-primary'>Pay</button></Link>}
                                    {order.paid && <span className='text-primary'>Paid</span>}
                                </td>

                                {/* <td>
                                    {
                                        !order.paid ? <Link to='/' className='btn btn-primary'>Proceed to pay</Link>
                                            : order.paid
                                    }

                                </td> */}
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