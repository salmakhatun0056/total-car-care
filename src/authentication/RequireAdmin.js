
import NotFound from '../pages/NotFound';

const RequireAdmin = ({ userData, children }) => {
    const { role } = userData.data;
    if (role !== 'admin') {
        return <NotFound></NotFound>
    }

    return children
};

export default RequireAdmin;