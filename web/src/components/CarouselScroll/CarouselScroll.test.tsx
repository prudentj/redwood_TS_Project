import { render } from '@redwoodjs/testing/web'

import CarouselScroll from './CarouselScroll'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CarouselScroll', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CarouselScroll />)
    }).not.toThrow()
  })
})
