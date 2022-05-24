import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imageUrl, setImageUrl] = useState("")
    console.log(imageUrl)
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        const toolData = {
            ...data,
            img: imageUrl
        }

        console.log(data)
        const res = await fetcher.post("/add-tool", toolData);
        console.log(res);
        reset()
        setImageUrl("")

    }

    const handleUploadImage = event => {
        setLoading(true)
        console.log(event.target.files[0])

        const img = event.target.files[0]
        console.log(img)
        const formData = new FormData()
        formData.set('image', img)
        axios.post("https://api.imgbb.com/1/upload?key=68fd24e40dd7457e3f27d0f8fbf6ca1a", formData)
            .then((res) => {
                console.log(res)
                setImageUrl(res.data.data.display_url)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div style={{ height: '100vh' }} className='bg-accent w-full  justify-center items-center flex'>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-primary text-2xl font-bold text-center'> ADD A Product</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control my-2">

                            <input {...register("name")} placeholder="Tools Name" class="input input-bordered" type="text" required />
                        </div>

                        <div class="form-control my-2">
                            <textarea {...register("description")}
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                id="exampleFormControlTextarea1"
                                rows="2"
                                placeholder="Write Your short description"
                            ></textarea>
                        </div>

                        <div class="form-control my-2">
                            <input {...register("price")} placeholder="Tool Price" class="input input-bordered" type="number" id="price" name="price" min='1' required />
                        </div>

                        <div class="form-control my-2">
                            <input {...register("minimum")} placeholder="Minimum Qty" class="input input-bordered" type="number" id="minimum" name="minimum" min='1' required />
                        </div>

                        <div class="form-control my-2">
                            <input {...register("available")} placeholder="Available Qty" class="input input-bordered" type="number" id="available" name="available" min='1' required />
                        </div>

                        <div class="form-control my-2">

                            <input onChange={handleUploadImage} type="file" placeholder="img" class="input input-bordered" />
                        </div>

                        <div class="form-control mt-6">
                            <button type='submit' class={!imageUrl ? "btn btn-disabled" : "btn btn-primary"}
                                disabled={!imageUrl ? true : false}
                            >ADD A PRODUCT</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;