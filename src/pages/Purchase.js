import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams()
    const [tool, setTool] = useState({})
    const { _id, name, img, price, description, minimum, available } = tool

    useEffect(() => {
        const getTool = async () => {
            const url = "fackdata.json/:id"
            fetch(url)
                .then(res => res.json())
                .then(data => setTool(data))
        }
        getTool()
    }, [id])
    console.log(tool)
    console.log(id)


    return (
        <div>
            <h2>This is Pusches{name}</h2>
            <h2>This is Pusches</h2>
            <h2>This is Pusches</h2>
            <h2>This is Pusches</h2>
            <h2>This is Pusches</h2>
            <h2>This is Pusches</h2>
        </div>
    );
};

export default Purchase;