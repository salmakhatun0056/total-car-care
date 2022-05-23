import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams()
    const [tool, setTool] = useState({})


    useEffect(() => {
        const getData = async () => {
            const url = `http://localhost:5000/get-tool/${id}`
            fetch(url)
                .then(res => res.json())
                .then(data => setTool(data))
        }
        getData()

    }, [id])
    console.log(tool)


    const { _id, name, img, price, description, minimum, available } = tool

    return (
        <div className='my-12 justify-center items-center flex'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img style={{ width: '150px' }} src={img} alt="Shoes" /></figure>
                <div className=''>
                    <div class="card-body text-center">
                        <h2 class="text-2xl font-bold text-center">Tool Name: {name}</h2>
                        <p className='text-error'>Price: ${price} </p>
                        <p>Tool Description: {description}</p>
                        <p>Minimum order quantity: {minimum} pic</p>
                        <p>Our available quantity {available} pic</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Purchase;