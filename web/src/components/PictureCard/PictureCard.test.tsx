import { render } from '@redwoodjs/testing/web'

import PictureCard from './PictureCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PictureCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PictureCard />)
    }).not.toThrow()
  })
})
