import React from 'react';
import frequentlyImage from '../assests/images/frequently2.jpg'

const Frequently = () => {
    return (
        <div className='mt-12'>
            <h1 className='text-center text-2xl text-primary'>Need Your Help?</h1>
            <h1 className='text-center text-4xl text-primary'>Request a quote.</h1>
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
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Message</span>
                                </label>
                                <textarea
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Write Your Message"
                                ></textarea>
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frequently;