import ShuffledDeck from './shuffledDeck'

describe('Shuffled decks', () => {
  it('Provides a 52-card deck as an array', () => {
    const deck = ShuffledDeck()
    expect(deck.length).toBe(52)
  })
  it('Stores cards as strings', () => {
    const deck = ShuffledDeck()
    expect(deck.every((card) => typeof card === 'string')).toBe(true)
  })
})
