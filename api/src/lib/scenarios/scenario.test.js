import Scenario from './scenario'

describe('Scenarios', () => {
  it('Provides community cards as strings', () => {
    const newScenario = Scenario()
    expect(
      newScenario.communityCards.every((card) => typeof card == 'string')
    ).toBe(true)
  })
  it('Provides 5 or fewer community cards', () => {
    const newScenario = Scenario()
    expect(newScenario.communityCards.length).toBeLessThanOrEqual(5)
  })
  it('Provides hole cards as strings', () => {
    const newScenario = Scenario()
    expect(newScenario.holeCards.every((card) => typeof card == 'string')).toBe(
      true
    )
  })
  it('Provides two hole cards', () => {
    const newScenario = Scenario()
    expect(newScenario.holeCards.length).toEqual(2)
  })
  // TODO
  // it('Provides players as player objects', () => {})
  it('Creates between 1 and 8 other players', () => {
    const newScenario = Scenario()
    expect(newScenario.players.length).toBeGreaterThanOrEqual(1)
    expect(newScenario.players.length).toBeLessThanOrEqual(8)
  })
})
