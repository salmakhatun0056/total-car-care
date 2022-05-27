import React from 'react';
import frequentlyImage from '../assests/images/frequently2.jpg'

const Frequently = () => {
    return (
        <div className='mt-12'>
            <h1 className='text-center text-2xl text-primary'>Need Your Help?</h1>
            <h1 className='text-center text-4xl text-primary'>Request a quote.</h1>
            <div style={{ backgroundImage: `url(${frequentlyImage})`, minHeight: '80vh', display: 'flex' }} className="hero w-3/4 mx-auto mb-5 mt-5 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                    <div className=" lg:text-left text-white">
                        <h1 className="text-3xl font-bold">Frequently asked your question</h1>
                        <p className="py-2"><span className='text-warning'>Question 1:</span> <br /> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className="py-2"><span className='text-warning'>Question 2:</span> <br /> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className="py-2"><span className='text-warning'>Question 3:</span> <br /> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full  max-w-sm lg:shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Write Your Message"
                                ></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frequently;