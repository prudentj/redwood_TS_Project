import { render } from '@redwoodjs/testing/web'

import VideoOverlay from './VideoOverlay'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VideoOverlay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoOverlay />)
    }).not.toThrow()
  })
})
