import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByTestId('content')).toBeInTheDocument()
  //const linkElement = screen.g .getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
