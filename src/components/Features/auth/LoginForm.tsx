// src/components/LoginForm.tsx
import React, { useState } from 'react';
// import { checkConsent, login } from '../api/auth';
// import { checkConsent, login } from '../../../api/auth';
import { checkConsent, login } from '../../../api/auth';
import { useNavigate } from 'react-router-dom';



interface Props {
  onSuccess: (empId: string, consent: number) => void;
}

const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(''); // previous error clear

  try {
    // 1️⃣ check consent
    // const consentRes = await checkConsent({ username, password, source: 'web', ip: '' });

    // if (!consentRes.status) {
    //   alert(consentRes.msg || 'Consent not granted');
    //   return; // stop login
    // }

    // 2️⃣ login
    const loginRes = await login(username, password);

    // Backend may return success or failure in data
    if (loginRes.status === false) {
      alert(loginRes.msg || 'Login failed'); // show error from backend
      return;
    }
     // 3️⃣ Save token + user info
    localStorage.setItem('auth_token', loginRes.token);
    localStorage.setItem('auth_user', JSON.stringify(loginRes.user));

    // 4️⃣ Redirect
    navigate('/dashboard');

    // ✅ Login successful
    console.log('Login successful', loginRes);
    // localStorage save, redirect etc.
    onSuccess(loginRes.user?.username, loginRes.user?.usr_login_consent);

  } catch (err: any) {
    // Axios error / network error
    console.error('Login error:', err);
    alert(err?.response?.data?.msg || err?.msg || 'Something went wrong');
  } finally {
    setLoading(false);


  }
};


  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"

        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;


function setError(arg0: any) {
  throw new Error('Function not implemented.');
}

