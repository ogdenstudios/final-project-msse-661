import Scenario from './scenario'

describe('Scenarios', () => {
  it('Provides community cards as strings', () => {
    const newScenario = Scenario()
    expect(
      newScenario.communityCards.every((card) => typeof card === 'string')
    ).toBe(true)
  })
  it('Provides 5 or fewer community cards', () => {
    const newScenario = Scenario()
    expect(newScenario.communityCards.length).toBeLessThanOrEqual(5)
  })
  it('Provides hole cards as strings', () => {
    const newScenario = Scenario()
    expect(
      newScenario.holeCards.every((card) => typeof card === 'string')
    ).toBe(true)
  })
  it('Provides two hole cards', () => {
    const newScenario = Scenario()
    expect(newScenario.holeCards.length).toEqual(2)
  })
  it('Creates between 1 and 8 other players', () => {
    const newScenario = Scenario()
    expect(newScenario.players).toBeGreaterThanOrEqual(1)
    expect(newScenario.players).toBeLessThanOrEqual(8)
  })
  it('Returns the current betting round as an array', () => {
    const newScenario = Scenario()
    expect(
      Array.isArray(newScenario.bettingInformation.currentBettingRound)
    ).toBe(true)
  })
  it('Returns the pot as a number', () => {
    const newScenario = Scenario()
    expect(typeof newScenario.bettingInformation.pot).toBe('number')
  })
})
