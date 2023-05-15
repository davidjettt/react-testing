import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import APIComponent from './APIComponent';
import axios from 'axios'

// test('handles onClick', () => {
//     const onClick = jest.fn()
//     render(<APIComponent />)
//     const buttonEle = screen.getByText('Get users')
//     console.log('BUTTON ELE', buttonEle)
//     fireEvent.click(buttonEle)
//     expect(onClick).toHaveBeenCalledTimes(1)
// })


afterEach(() => {
    jest.restoreAllMocks()
})

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

// test('gets the data', async () => {
//   axiosMock.get.mockResolvedValue({
//     data: [
//       {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",

//     },

//   ]
//   })

//   const { getAllByRole } = render(<APIComponent />)

//   await waitFor(() => {
//     const userList = getAllByRole('listitem')
//     expect(userList).toHaveLength(1)
//     expect(userList[0]).toHaveTextContent('Leanne Graham')
//   })

// })

test('gets the data', async () => {
  axiosMock.get.mockResolvedValue({
    data: [
      {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",

    },

  ]
  })

    render(<APIComponent />)

    const userList = await waitFor(() => {
        return screen.getAllByRole('listitem')
    })

    expect(userList).toHaveLength(1)
    expect(userList[0]).toHaveTextContent('Leanne Graham')

})
