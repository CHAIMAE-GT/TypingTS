import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders login form', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Login');

    // Assert that login form elements are rendered
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test('submits login form', () => {
    const mockSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<LoginForm onSubmit={mockSubmit} />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Login');

    // Mock user input
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Assert that form was submitted
    expect(mockSubmit).toHaveBeenCalled();
});
