import React from 'react';

const ExtraSection = () => {
    return (
        <div>
            <h2 className='text-3xl text-center text-primary font-bold mb-6'> Resources Center</h2>
            <div className='flex flex-wrap flex-row justify-between px-20 mb-6 mx-auto'>
                <div className='text-center'>
                    <div className=' grid justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                    </div>
                    <h2 className='font-bold text-primary'>Technical Videos</h2>
                    <button className='btn btn-warning text-white'>View Technical Videos ❯</button>
                </div>
                <div className='text-center'>
                    <div className=' grid justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h2 className='font-bold text-primary'>Brochures</h2>
                    <button className='btn btn-warning text-white'>View Brochures ❯</button>
                </div>
                <div className='text-center'>
                    <div className=' grid justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className='font-bold text-primary'>Ebooks</h2>
                    <button className='btn btn-warning text-white'>View Ebooks ❯</button>
                </div>
            </div>
            <div className='text-center mb-6 text-primary'>
                <a href='/'>View full resource Library</a>
            </div>
        </div>
    );
};

export default ExtraSection;