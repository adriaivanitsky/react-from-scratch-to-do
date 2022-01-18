import { render, screen } from '@testing-library/react';
import Header from '././components/Header.js';

test('header should render login', () => {
  render(<Header />);
  screen.getByText('login');
});
