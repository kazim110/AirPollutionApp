import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/Navbar';
import '@testing-library/jest-dom/extend-expect';

test('renders NavBar component without errors', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );

  const BackLink = screen.getByText(/Back/i);
  const NameLink = screen.getByText(/Europe/i);

  expect(BackLink).toBeInTheDocument();
  expect(NameLink).toBeInTheDocument();
});
