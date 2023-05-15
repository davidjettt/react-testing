import React from 'react';
import { render, screen } from '@testing-library/react';
import Person from './Person';

test('renders a name', () => {
  render(<Person name='Bob'/>);
  const divElement = screen.getByRole('contentinfo');
  expect(divElement).toHaveTextContent('Name is Bob');
  expect(divElement).toHaveAttribute('role', 'contentinfo');
});
