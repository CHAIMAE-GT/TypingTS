// frontend/src/components/Navigation.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Navigation = () => {
    const [activeLink, setActiveLink] = useState('home'); // State to track active link
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        history.push('/login'); // Redirect to login page after logout
    };

    return (
        <div>
            <nav>
                <ul>
                    <li className={activeLink === 'home' ? 'active' : ''}>
                        <button onClick={() => setActiveLink('home')}>Home</button>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Navigation;
