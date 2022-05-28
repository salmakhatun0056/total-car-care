import React from 'react';
import { useQuery } from 'react-query';

const ManageAllOrders = () => {
    const { isLoading, error, data, refetch } = useQuery('allOrders', () =>

        fetch('http://localhost:5000/all-orders', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()
            )
    )
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
                        <th>Address</th>
                        <th>Email</th>
                        <th>Order Qty</th>
                        <th>Tool Price</th>
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
                                <td>{tool.address}</td>
                                <td>{tool.email}</td>
                                <td>{tool.orderQty}</td>
                                <td>${tool.price} per/piece </td>
                                {/* <td><button onClick={() => handleDelete(tool._id)} className='btn btn-primary'>DELETE</button></td> */}


                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;