
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import CustomTextForm from './components/CustomTextForm';
import CustomTextList from './components/CustomTextList';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <ProtectedRoute path="/dashboard" component={DashboardPage} />
                <Route path="/register" component={RegistrationForm} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/custom-texts" component={CustomTextList} />
                <Route exact path="/custom-texts/new" component={CustomTextForm} />
                {/* Add other routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;
