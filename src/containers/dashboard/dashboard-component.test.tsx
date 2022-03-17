import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardComponent from './dashboard-component';

test('renders learn react link', () => {
  render(<DashboardComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
