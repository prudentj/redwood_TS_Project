import { render } from '@redwoodjs/testing/web'

import HexGridPage from './HexGridPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HexGridPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HexGridPage />)
    }).not.toThrow()
  })
})
