import { render } from '@redwoodjs/testing/web'

import ButtonRound from './ButtonRound'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ButtonRound', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ButtonRound />)
    }).not.toThrow()
  })
})
