import React, { useEffect, useState } from 'react';
import fetcher from '../api';
import banner1 from '../assests/images/banner-car1.png'
import banner2 from '../assests/images/banner-car2.png'
import banner3 from '../assests/images/banner-car3.jpg'
import Tool from './Tool';

const Landing = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetcher.get('/get-tool');
            setTools(res.data);
        })();

    }, [])

    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img className='w-full shrink-0' src={banner1} style={{ minHeight: '70vh', display: 'flex', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }} alt='' />
                    <div className=' carousel-caption w-full lg:w-1/2  h-full flex justify-center items-center absolute  text-white '>
                        <div className="">
                            <div className="hero-content text-center text-neutral-content px-20 flex ">
                                <div className="max-w-md text-black">
                                    <h6 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Largest</h6>
                                    <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400" className="mb-5 text-5xl font-bold">Car Parts Shop</h1>
                                    <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className="mb-5">Great savings- Free delivery </p>
                                    <button data-aos="zoom-in" data-aos-delay="1200" className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img className='w-full shrink-0' src={banner2} style={{ minHeight: '70vh', display: 'flex', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }} alt='' />
                    <div className=' carousel-caption w-full lg:w-1/2  h-full flex justify-center items-center absolute  text-white '>
                        <div className="">
                            <div className="hero-content text-center text-neutral-content px-20 flex ">
                                <div className="max-w-md text-black">
                                    <h6 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Largest</h6>
                                    <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400" className="mb-5 text-5xl font-bold">Car Parts Shop</h1>
                                    <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className="mb-5">Great savings- Free delivery </p>
                                    <button data-aos="zoom-in" data-aos-delay="1200" className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img className='w-full shrink-0' src={banner3} style={{ minHeight: '70vh', display: 'flex', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }} alt='' />
                    <div className=' carousel-caption w-full lg:w-1/2  h-full flex justify-center items-center absolute  text-white '>
                        <div className="">
                            <div className="hero-content text-center text-neutral-content px-20 flex ">
                                <div className="max-w-md text-black">
                                    <h6 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Largest</h6>
                                    <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400" className="mb-5 text-5xl font-bold">Car Parts Shop</h1>
                                    <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className="mb-5">Great savings- Free delivery </p>
                                    <button data-aos="zoom-in" data-aos-delay="1200" className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-3xl text-center mt-5 mb-5 font-bold text-primary'>Our Car Tools </h2>
                <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mb-5 lg:px-12  gap-x-6'>
                    {
                        tools.slice(0 - 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                    }
                </div>
            </div>
        </>
    );
};

export default Landing;