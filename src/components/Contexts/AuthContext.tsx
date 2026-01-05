// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type User = { id: number; name: string } | null;

const AuthContext = createContext({
  user: null as User,
  login: (u: User) => {},
  logout: () => {},
});

const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const s:any = localStorage?.getItem('auth_user');
    if (s != 'null' && s != 'undefined' && s != '') {
        setUser(JSON.parse(s));
    }
  }, []);

  const login = (u: User) => {
    setUser(u);
    if (u) localStorage.setItem('auth_user', JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { useAuth };
