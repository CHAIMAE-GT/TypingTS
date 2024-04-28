import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { storeAuthToken } from '../services/auth';

const LoginForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);
    const history = useHistory();

    const handleInputChange = (e) => {
        // Handle input changes for both username and password
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Your login logic, for example, checking credentials
            // Assuming token is received upon successful login
            const token = 'your_auth_token'; // Replace with actual token
            storeAuthToken(token); // Store the token securely
            setError(''); // Clear any previous error messages
            setRedirect(true); // Redirect to dashboard after successful login
            if (onSubmit) onSubmit(); // Call onSubmit prop if provided
        } catch (error) {
            setError('Invalid username or password'); // Error handling
        }
    };

    if (redirect) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={handleInputChange} 
                    placeholder="Username" 
                    aria-label="Username"
                />
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleInputChange} 
                    placeholder="Password" 
                    aria-label="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
