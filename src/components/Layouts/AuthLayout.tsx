// src/components/Layouts/AuthLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import '../../styles/Layout.scss';

const AuthLayout: React.FC = () => {
  return (
    <div className="app-shell">
      <div className="sidebar-area">
        <Sidebar />
      </div>
      <div className="content-area">
        <div className="">
          <Header />
        </div>

        <main className="main-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
