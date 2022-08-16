import { render } from '@redwoodjs/testing/web'

import Hexagon from './Hexagon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Hexagon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Hexagon />)
    }).not.toThrow()
  })
})
