import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../services/api'; 

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            console.log('Registration successful:', response);
            setError('Registration successful!');
            setTimeout(() => {
                setRedirect(true);
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error('Registration failed:', error);
            setError(error.response.data.message || 'An error occurred during registration.');
        }
    };

    if (redirect) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            {error && <p>Error: {error}</p>}
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
