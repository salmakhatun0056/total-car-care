import React from 'react';
import NotFound from '../pages/NotFound';

const NotAdmin = ({ userData, children }) => {

    const { role } = userData.data;
    if (role === 'admin') {
        return <NotFound></NotFound>
    }

    return children
};

export default NotAdmin;