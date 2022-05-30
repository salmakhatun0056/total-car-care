import React from 'react';
import { useQuery } from 'react-query';

const ManageAllOrders = () => {
    const { isLoading, error, data, refetch } = useQuery('allOrders', () =>

        fetch('https://ancient-caverns-35503.herokuapp.com/all-orders', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()
            )
    )
    const handleShipping = id => {
        const shipping = { paid: 'shipped' }
        fetch(`http://localhost:5000/order/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(shipping)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                refetch();
            })
    }
    console.log(data)
    return (
        <div className="overflow-x-auto mt-6 w-full h-screen">
            <table className="table w-full px-6">
                {/* <!-- head --> */}
                <thead >
                    <tr className='text-center'>
                        <th>S/L</th>
                        <th>Tool Image</th>
                        <th> Tool Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Order Qty</th>
                        <th>Tool Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((tool, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td><img className='w-12' src={tool.toolImage} alt="" /></td>
                                <td>{tool.toolName}</td>
                                <td>{tool.name}</td>
                                <td>{tool.email}</td>
                                <td>{tool.orderQty}</td>
                                <td>${tool.price} per/piece </td>
                                <td>{
                                    !tool.paid ? ''
                                        :
                                        <p className='text-green-500 font-bold text-center'>{tool.paid}</p>
                                }
                                </td>
                                <td>{
                                    tool.paid === 'pending' ? <button onClick={() => handleShipping(tool._id)} className='btn btn-primary'>Ship Now</button> : ''
                                }</td>


                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;