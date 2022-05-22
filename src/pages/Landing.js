import React from 'react';
import bannerBackground from '../assests/images/banner-car.png'

const Landing = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img className='w-full shrink-0' src={bannerBackground} style={{ minHeight: '70vh', display: 'flex', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }} alt='' />
                <div className=' carousel-caption w-full lg:w-1/2  h-full flex justify-center items-center absolute  text-white '>
                    <div class="">
                        <div class="hero-content text-center text-neutral-content px-20 flex ">
                            <div class="max-w-md text-black">
                                <h6 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Largest</h6>
                                <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400" class="mb-5 text-5xl font-bold">Car Parts Shop</h1>
                                <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" class="mb-5">Great savings- Free delivery </p>
                                <button data-aos="zoom-in" data-aos-delay="1200" class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img className='w-full shrink-0' src={bannerBackground} style={{ minHeight: '70vh', display: 'flex', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }} alt='' />
                <div className=' carousel-caption w-full lg:w-1/2  h-full flex justify-center items-center absolute  text-white '>
                    <div class="">
                        <div class="hero-content text-center text-neutral-content px-20 flex ">
                            <div class="max-w-md text-black">
                                <h6 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Largest</h6>
                                <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400" class="mb-5 text-5xl font-bold">Car Parts Shop</h1>
                                <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" class="mb-5">Great savings- Free delivery </p>
                                <button data-aos="zoom-in" data-aos-delay="1200" class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img className='w-full shrink-0' src={bannerBackground} style={{ minHeight: '70vh', display: 'flex', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }} alt='' />
                <div className=' carousel-caption w-full lg:w-1/2  h-full flex justify-center items-center absolute  text-white '>
                    <div class="">
                        <div class="hero-content text-center text-neutral-content px-20 flex ">
                            <div class="max-w-md text-black">
                                <h6 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Largest</h6>
                                <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400" class="mb-5 text-5xl font-bold">Car Parts Shop</h1>
                                <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" class="mb-5">Great savings- Free delivery </p>
                                <button data-aos="zoom-in" data-aos-delay="1200" class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Landing;