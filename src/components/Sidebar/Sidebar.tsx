import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, User, Clock, LogOut, Menu } from 'lucide-react';
import '../../styles/Sidebar.scss';

const SIDEBAR_COLLAPSED_KEY = 'sidebar_collapsed_v1';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    try {
      const s = localStorage.getItem(SIDEBAR_COLLAPSED_KEY);
      return s === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const shell = document.querySelector('.app-shell');
    if (shell) {
      if (collapsed) shell.classList.add('sidebar-collapsed');
      else shell.classList.remove('sidebar-collapsed');
    }
    try {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, collapsed ? '1' : '0');
    } catch {}
  }, [collapsed]);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    navigate('/login');
  };

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : 'expanded'}`} aria-expanded={!collapsed}>
      <div className="sidebar-top">
        <button
          type="button"
          className="collapse-toggle"
          onClick={() => setCollapsed((c) => !c)}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <Menu size={18} />
        </button>

        <div className="sidebar-header">
          <h2 className="brand">
            <span className="brand-icon">D</span>
            {!collapsed && <span className="brand-text">DPS Portal</span>}
          </h2>
        </div>
      </div>

      <nav className="sidebar-menu" role="navigation" aria-label="Main">
        <NavLink to="/dashboard" className="sidebar-link" title="Dashboard">
          <Home size={18} />
          {!collapsed && <span className="link-text">Dashboard</span>}
        </NavLink>

        <NavLink to="/attendance" className="sidebar-link" title="Attendance">
          <Clock size={18} />
          {!collapsed && <span className="link-text">Attendance</span>}
        </NavLink>

        <NavLink to="/profile" className="sidebar-link" title="Profile">
          <User size={18} />
          {!collapsed && <span className="link-text">Profile</span>}
        </NavLink>

        <NavLink to="/daily-task" className="sidebar-link" title="Daily Task">
          <User size={18} />
          {!collapsed && <span className="link-text">Daily Task</span>}
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout} title="Logout">
          <LogOut size={18} />
          {!collapsed && <span className="link-text">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
