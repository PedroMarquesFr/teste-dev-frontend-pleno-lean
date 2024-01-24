import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatusCell from '.'; // Adjust the import path as needed
import '@testing-library/jest-dom';

describe('StatusCell', () => {
  // Smoke test
  it('renders without crashing', () => {
    render(<StatusCell formattedValue="Ativo" />);
  });

  // Test to check if the ActiveIndicator is displayed for "Ativo"
  it('displays the active indicator when status is "Ativo"', () => {
    render(<StatusCell formattedValue="Ativo" />);
    const activeIndicator = screen.getByText('Ativo');
    expect(activeIndicator).toBeInTheDocument();
    expect(activeIndicator).toHaveStyle(`color: #46855b`); // Assuming ActiveIndicator is styled with color green
  });

  // Test to check if the InactiveIndicator is displayed for "Inativo"
  it('displays the inactive indicator when status is "Inativo"', () => {
    render(<StatusCell formattedValue="Inativo" />);
    const inactiveIndicator = screen.getByText('Inativo');
    expect(inactiveIndicator).toBeInTheDocument();
    expect(inactiveIndicator).toHaveStyle(`color: #e53e3e`); // Assuming InactiveIndicator is styled with color red
  });
});
