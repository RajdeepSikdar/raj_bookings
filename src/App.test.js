import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders Login page on root path', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const heading = screen.getByText(/login/i);
  expect(heading).toBeInTheDocument();
});