import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';

const MakeAdmin = () => {

    const { isLoading, error, data, refetch } = useQuery('users', () =>
        fetch('https://ancient-caverns-35503.herokuapp.com/users', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAdmin = email => {
        fetch(`https://ancient-caverns-35503.herokuapp.com/users/${email}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(result => {
                refetch()
                toast('Successfully made an admin')
                console.log(result)
            })
    }


    return (
        <div className="overflow-x-auto mt-6">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((user, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{
                                    !user.role && <button onClick={() => handleAdmin(user.email)} className='btn btn-primary'>Make Admin</button>
                                }</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;