import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Counter from './Counter';


test('handles state change', () => {
    render(<Counter />)

    const divEle = screen.getByRole('count')
    const buttonEle = screen.getByText('Increment')
    fireEvent.click(buttonEle)

    expect(divEle).toHaveTextContent('Count is 1')
})
