import React from 'react';
import frequentlyImage from '../assests/images/frequently2.jpg'

const Frequently = () => {
    return (
        <div className='mt-12'>
            <h1 className='text-center text-2xl text-primary'>this is Frequently</h1>
            <div style={{ backgroundImage: `url(${frequentlyImage})`, minHeight: '80vh', display: 'flex' }} class="hero w-3/4 mx-auto mb-5 mt-5 bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                    <div class=" lg:text-left text-white">
                        <h1 class="text-3xl font-bold">Frequently asked your question</h1>
                        <p class="py-2"><span className='text-warning'>Question 1:</span> <br /> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p class="py-2"><span className='text-warning'>Question 2:</span> <br /> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p class="py-2"><span className='text-warning'>Question 3:</span> <br /> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frequently;