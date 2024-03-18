import { render, screen } from '@testing-library/react';
import LogInView from '../src/views/LogIn/LogInView.jsx';

test('renders learn react link', () => {
  render(<LogInView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
