import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'; // import the library here

test('renders title', () => {
  const title = 'Hello React App with props';
  const subtitle = 'I have repurposed my first React application to practice writing a test and I\'m using props for this subtitle and breaking it down into smaller components';
  render(<App title={title} subtitle={subtitle} />);
  const titleElement = screen.getByText(/Hello React App with props/i);
  expect(titleElement).toBeInTheDocument();
});


