
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAuthToken } from '../services/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = !!getAuthToken();

    return (
        <Route {...rest} render={(props) => (
            isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        )} />
    );
};

export default ProtectedRoute;
