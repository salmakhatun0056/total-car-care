
import { useQuery } from 'react-query';
import Loading from '../components/Loading';

const Reviews = () => {
    const reviews = useQuery('reviews', () => fetch('http://localhost:5000/get-review').then(res => res.json()))
    if (reviews.isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 my-12'>
            {
                reviews.data.map((review, index) => <div key={index} className='card w-96 bg-primary shadow-xl'>
                    <div className='p-6'>
                        <p className='text-white'>{review.description}</p>
                        <h2 className='card-tittle text-warning'>{review.rating} Star</h2>
                        <div className='card-actions justify-end text-white'>
                            <p>1 day ago</p>
                        </div>
                    </div>
                </div>)
            }
            {/* <h2 className='text-primary text-center text-2xl font-bold my-12'>All Reviews {reviews.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5  lg:gap-x-5 lg:px-12 mb-6'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div> */}
        </div>
    );
};

export default Reviews;