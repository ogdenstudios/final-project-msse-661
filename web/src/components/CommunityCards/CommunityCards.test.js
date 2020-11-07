import { render } from '@redwoodjs/testing'

import CommunityCards from './CommunityCards'

describe('CommunityCards', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommunityCards />)
    }).not.toThrow()
  })
})
