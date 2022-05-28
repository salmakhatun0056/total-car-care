import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import fetcher from '../../api';

const ManageProducts = () => {
    const { isLoading, error, data, refetch } = useQuery('tools', () =>

        fetch('http://localhost:5000/get-tool', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()
            )
    )
    console.log(data)


    const handleDelete = id => {
        fetch(`http://localhost:5000/delete-tool/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                refetch()
            })
    }
    return (
        <div className="overflow-x-auto mt-6 w-full ">
            <table className="table w-full px-6">
                {/* <!-- head --> */}
                <thead >
                    <tr className='text-center'>
                        <th>S/L</th>
                        <th>Tool Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Minimum Orders</th>
                        <th>Available Orders</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((tool, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td><img src={tool.img} alt="" /></td>
                                <td>{tool.name}</td>
                                <td>${tool.price} per/piece </td>
                                <td>{tool.description}</td>
                                <td>{tool.minimum} pieces </td>
                                <td>{tool.available} pieces</td>
                                <td><button onClick={() => handleDelete(tool._id)} className='btn btn-primary'>DELETE</button></td>


                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;