import React from 'react';
import { useForm } from 'react-hook-form';
import fetcher from '../../api';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {

        const res = await fetcher.post("/add-review", data);
        console.log(res);
        reset()



    }

    return (
        <div className='bg-accent w-full h-screen justify-center items-center flex'>

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-primary text-2xl font-bold text-center'> ADD Reviews</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Tools Rating</span>
                            </label>
                            <input {...register("ratings")} type="number" placeholder="Tools ratings" class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Review Description</span>
                            </label>

                            <textarea {...register("description")}
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Write Your short description"
                            ></textarea>
                        </div>


                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">ADD SERVICE</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;