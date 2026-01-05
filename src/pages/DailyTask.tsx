import React from 'react';
import '../styles/Sidebar.scss';
import '../styles/Dashboard.scss';
import DailyTaskComponent from '../components/Features/dailytask/DailyTask';

const DailyTask: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="main-content">
        <div className="content-wrapper">
          <DailyTaskComponent />
        </div>
      </div>
    </div>
  );
};

export default DailyTask;
