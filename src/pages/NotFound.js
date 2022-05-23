import React from 'react';
import notFound from '../assests/images/notFound.png'

const NotFound = () => {
    return (
        <div style={{ minHight: '90vh' }} class="hero lg:h-5/6 bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='px-20 w-full'>
                    <img src={notFound} class="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='px-20'>
                    <h1 class="text-5xl font-bold text-primary">Page <br />Not Found</h1>
                    <p class="py-6">The page you requested was not found,and we have a fine guess why . If you type the URL directly please make sure the spelling is correct. If you clicked on a link to get here, the link is outdated. What can you do? Have no fear, help is near.</p>
                    <button className='btn btn-primary'><a className='text-white ' href="/">Go Home</a></button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;