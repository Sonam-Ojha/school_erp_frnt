import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'User';
  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    navigate('/login');
    window.location.reload();
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light shadow-sm border-bottom">
      <h5 className="m-0">
        <i className="fa fa-cogs me-2"></i> Employee / Attendance Dashboard
      </h5>

      <div className="d-flex align-items-center">
        <span className="me-3 fw-bold text-primary">
          <i className="fa fa-user me-1"></i> {username}
        </span>
        <Button variant="outline-danger" size="sm" onClick={handleLogout}>
          <i className="fa fa-sign-out me-1"></i> Logout
        </Button>
      </div>
      
    </header>
  );
};

export default Header;
