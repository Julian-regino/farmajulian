import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
    render(<App />);
    const headerElement = screen.getByText(/catálogo/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders contact form', () => {
    render(<App />);
    const formElement = screen.getByPlaceholderText(/tu nombre/i);
    expect(formElement).toBeInTheDocument();
});
