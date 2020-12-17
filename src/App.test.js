import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coming soon', () => {
  render(<App />);
  const comingSoon = screen.getByText(/Coming soon/i);
  expect(comingSoon).toBeInTheDocument();
});
