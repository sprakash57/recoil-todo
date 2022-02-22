import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import App from '.';

test('renders learn react link', () => {
  render(<App />, { wrapper: RecoilRoot });
  const linkElement = screen.getByText(/Recoil-todo/i);
  expect(linkElement).toBeInTheDocument();
});