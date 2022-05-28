import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar';

const Dashboard = ({ userData }) => {
    return (
        <DashboardSidebar userData={userData}>
            <Outlet></Outlet>
        </DashboardSidebar>
    );
};

export default Dashboard;