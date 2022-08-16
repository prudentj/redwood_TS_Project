import { render } from '@redwoodjs/testing/web'

import SubscribeForm from './SubscribeForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SubscribeForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubscribeForm />)
    }).not.toThrow()
  })
})
