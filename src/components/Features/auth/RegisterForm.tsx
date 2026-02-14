import React, { useState } from 'react';
import { register } from '../../../api/auth';
import { useNavigate, Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        roll_no: '',
        className: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await register(formData);
            alert('Registration Successful! Please login.');
            navigate('/login');
        } catch (err: any) {
            console.error('Registration error:', err);
            alert(err?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-sm" style={{ width: '400px' }}>
                <h3 className="text-center mb-4">Register Student</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email Data"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Roll No</label>
                            <input
                                type="text"
                                name="roll_no"
                                className="form-control"
                                placeholder="Roll No"
                                value={formData.roll_no}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Class</label>
                            <input
                                type="text"
                                name="className"
                                className="form-control"
                                placeholder="Class"
                                value={formData.className}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success w-100" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <div className="mt-3 text-center">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
