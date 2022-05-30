
import { useQuery } from 'react-query';
import Loading from '../components/Loading';

const Reviews = () => {
    const reviews = useQuery('reviews', () => fetch('https://ancient-caverns-35503.herokuapp.com/get-review').then(res => res.json()))
    if (reviews.isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-primary text-2xl font-bold text-center'>Our Customers Reviews</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:px-12 my-12'>
                {
                    reviews.data.map((review, index) => <div key={index} className='card w-96 bg-primary shadow-xl'>
                        <div className='p-6'>
                            <h3 className='text-xl font-bold text-white'>{review.name}</h3>
                            <p className='text-white'>{review.description}</p>
                            <h2 className='card-tittle text-warning text-xl font-bold'>{review.rating} Star</h2>
                            <div className='card-actions justify-end text-white'>
                                <p>4 days ago</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;