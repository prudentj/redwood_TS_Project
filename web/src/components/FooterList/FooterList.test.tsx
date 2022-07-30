import { render } from '@redwoodjs/testing/web'

import FooterList from './FooterList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FooterList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FooterList />)
    }).not.toThrow()
  })
})
