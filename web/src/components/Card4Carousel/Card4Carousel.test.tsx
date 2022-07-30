import { render } from '@redwoodjs/testing/web'

import Card4Carousel from './Card4Carousel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Card4Carousel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Card4Carousel />)
    }).not.toThrow()
  })
})
