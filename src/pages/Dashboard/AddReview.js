import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
// import fetcher from '../../api';

const AddReview = ({ user }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const reviews = {
            rating: data.rating,
            description: data.description,
            name: user.displayName

        }
        console.log(reviews)
        fetch('https://ancient-caverns-35503.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged) {
                    toast('Your Review added')
                    reset()
                }
            })
        // const res = await fetcher.post("/add-review", data);
        // console.log(res);
        // 
        //



    }

    return (
        <div className='bg-accent w-full h-screen justify-center items-center flex'>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-primary text-2xl font-bold text-center'> ADD Reviews</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tools Rating</span>
                            </label>
                            {/* <input  type="number"   /> */}
                            <input {...register("rating")} placeholder="Tools ratings" className="input input-bordered" type="number" id="rating" name="rating" min="1" max="5" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review Description</span>
                            </label>

                            <textarea {...register("description")} maxLength="250"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Write Your short description" required
                            ></textarea>
                        </div>


                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">ADD REVIEW</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;