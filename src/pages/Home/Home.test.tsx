import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Home from 'pages/Home';
import { Suspense } from 'react';

describe('pages::Home', () => {
  test('renders Add button', async () => {
    render(
      <Suspense fallback={<div>Loading...</div>}>
        <RecoilRoot>
          <Home />
        </RecoilRoot>
      </Suspense>
    );
    const addBtn = await screen.findByText(/Add/i);
    expect(addBtn).toBeInTheDocument();
  });
});