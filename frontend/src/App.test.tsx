import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios'


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

afterEach(() => {
  jest.restoreAllMocks()
})


jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

test('should display fetched data', async () => {
  mockedAxios.get.mockResolvedValue({
    data: {
      message: 'Hello, World!'
    }
  })

  const { getByTestId, getByText } = render(<App />)

  await waitFor(() => {
    const ele = getByText('Hello, World!')
    expect(ele).toHaveTextContent('Hello, World!')
  })

  expect(mockedAxios.get).toHaveBeenCalledTimes(1)
  expect(mockedAxios.get).toHaveBeenLastCalledWith('/test')

})


// describe('App', () => {
//   const renderComponent = () => (render(<App />));

//   test('renders learn react link', async () => {

//     const { getByText, getAllByRole } = renderComponent();

//     fireEvent.click(getByText('Get users'));

//     await waitFor(() => {
//       const userList = getAllByRole('listitem');
//       expect(userList).toHaveLength(10);
//       expect(userList[0]).toHaveTextContent('Leanne Graham');
//       expect(userList[1]).toHaveTextContent('Ervin Howell');
//     });
//   });
// })
