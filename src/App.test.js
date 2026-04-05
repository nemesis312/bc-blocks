import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders brand name in toolbar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/bc-blocks/i);
  expect(linkElement).toBeInTheDocument();
});
