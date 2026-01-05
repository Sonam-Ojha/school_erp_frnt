// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/LoginPage';
// import DailyTask from './pages/DailyTask';
// import React, { Suspense } from 'react';
// import AuthLayoot from './components/Layouts/AuthLayout';
// import { appRoutes, nestedRoutes } from './routesConfig';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('auth_token'));

//   useEffect(() => {
//     const handleStorageChange = () => {
//       setIsLoggedIn(!!localStorage.getItem('auth_token'));
//     };

//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} />} />
//         <Route path="/login" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />

//         <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}/>
//         <Route path="/daily-task" element={isLoggedIn ? <DailyTask /> : <Navigate to="/daily-task" />}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AuthLayout from './components/Layouts/AuthLayout';
import LoginForm from './components/Features/auth/LoginForm';
import { appRoutes } from './routesConfig';


const isLoggedIn = () => !!localStorage.getItem('auth_token');
function RouteWithSuspense({ element: ElementComponent }: { element: any }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ElementComponent />
    </Suspense>
  );
}
function LoginGuard({ children }: { children: React.ReactElement }) {
  const location = useLocation();
  if (isLoggedIn()) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return children;
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
           <Route
          path="/login"
          element={
            <LoginGuard>
              <LoginForm onSuccess={() => { }} />
            </LoginGuard>
          }
        />
        <Route path="/" element={<AuthLayout />}>
          {appRoutes.map((r) => {
            if (r.path === '/' || r.exact) {
              return (
                <Route
                  key={r.path}
                  index
                  element={<RouteWithSuspense element={r.element} />}
                />
              );
            }
            const relativePath = r.path.replace(/^\//, '');
            return (
              <Route
                key={r.path}
                path={relativePath}
                element={<RouteWithSuspense element={r.element} />}
              />
            );
          })}
        </Route>
        <Route
          path="*"
          element={isLoggedIn() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
