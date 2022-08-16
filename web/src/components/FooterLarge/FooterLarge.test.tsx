import { render } from '@redwoodjs/testing/web'

import FooterLarge from './FooterLarge'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FooterLarge', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FooterLarge />)
    }).not.toThrow()
  })
})
