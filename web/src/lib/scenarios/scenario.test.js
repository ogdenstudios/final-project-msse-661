import Scenario from './scenario'

const sampleDeck = ['AH', 'AD', 'AS', 'AC', 'KH', 'KD', 'KS']

describe('Scenarios', () => {
  it('Provides community cards as strings', () => {
    const newScenario = Scenario(sampleDeck)
    expect(
      newScenario.communityCards.every((card) => typeof card === 'string')
    ).toBe(true)
  })
  it('Provides 5 or fewer community cards', () => {
    const newScenario = Scenario(sampleDeck)
    expect(newScenario.communityCards.length).toBeLessThanOrEqual(5)
  })
  it('Provides hole cards as strings', () => {
    const newScenario = Scenario(sampleDeck)
    expect(
      newScenario.holeCards.every((card) => typeof card === 'string')
    ).toBe(true)
  })
  it('Provides two hole cards', () => {
    const newScenario = Scenario(sampleDeck)
    expect(newScenario.holeCards.length).toEqual(2)
  })
  it('Creates between 1 and 8 other players', () => {
    const newScenario = Scenario(sampleDeck)
    expect(newScenario.players).toBeGreaterThanOrEqual(1)
    expect(newScenario.players).toBeLessThanOrEqual(8)
  })
})
