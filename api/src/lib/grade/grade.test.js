import Grade from './grade'

describe('Betting', () => {
  it('Returns a 0 if no part of the equation is correct', () => {
    const wrongAnswer = {}
    expect(Grade(wrongAnswer)).toEqual(0)
  })

  it('Returns a 0.5 if the pot odds are correct but the hand strength is not', () => {
    const partialAnswer = {}
    expect(Grade(partialAnswer)).toEqual(0.5)
  })

  it('Returns a 0.5 if the hand strength is correct but the pot odds are not', () => {
    const partialAnswer = {}
    expect(Grade(partialAnswer)).toEqual(0.5)
  })

  it('Returns a 1 if the answer is correct', () => {
    const correctAnswer = {}
    expect(Grade(correctAnswer)).toEqual(1)
  })
})
