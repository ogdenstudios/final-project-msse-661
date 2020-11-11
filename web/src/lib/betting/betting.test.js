import Betting from './betting'

describe('Betting', () => {
  it('Returns an array of the current betting round', () => {
    const bettingHistory = Betting(0, 2)
    expect(Array.isArray(bettingHistory.currentBettingRound)).toBe(true)
  })
  it('Returns an array of integers as the current betting round', () => {
    const bettingHistory = Betting(1, 3)
    expect(
      bettingHistory.currentBettingRound.every((bet) => typeof bet === 'number')
    ).toBe(true)
  })
  it('Returns a pot total', () => {
    const bettingHistory = Betting(2, 4)
    expect(typeof bettingHistory.pot === 'number').toBe(true)
  })
})
