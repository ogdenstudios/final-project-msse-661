import { render } from '@redwoodjs/testing'

import HoleCards from './HoleCards'

describe('HoleCards', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HoleCards />)
    }).not.toThrow()
  })
})
