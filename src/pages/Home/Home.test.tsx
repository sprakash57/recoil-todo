import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Home from 'pages/Home';

describe('pages::Home', () => {
  test('renders Add button', () => {
    render(<Home />, { wrapper: RecoilRoot });
    const addBtn = screen.getByText(/Add/i);
    expect(addBtn).toBeInTheDocument();
  });
});