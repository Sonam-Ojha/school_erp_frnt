import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import DashboardContent from '../components/Features/dashboard/DashboardContent';
import '../styles/Sidebar.scss';
import '../styles/Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      {/* <Sidebar /> */}
      <div className="main-content">
        {/* <div className="header">
          <Header />
        </div> */}
        <div className="content-wrapper">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
