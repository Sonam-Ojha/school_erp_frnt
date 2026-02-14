import React, { useState } from 'react';
import { login } from '../../../api/auth';
import { useNavigate, Link } from 'react-router-dom';

interface Props {
  onSuccess: (user: any) => void;
}

const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loginRes = await login({ email, password });

      // Save token + user info
      localStorage.setItem('auth_token', loginRes.token);
      localStorage.setItem('auth_user', JSON.stringify(loginRes.user));

      console.log('Login successful', loginRes);
      onSuccess(loginRes.user);
      navigate('/dashboard');

    } catch (err: any) {
      console.error('Login error:', err);
      alert(err?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">School ERP Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-3 text-center">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

