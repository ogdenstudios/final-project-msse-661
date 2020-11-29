import Grade from './grade'

describe('Betting', () => {
  it('Returns a 0 and false/false if no part of the equation is correct', () => {
    const wrongAnswer = {
      potOdds: 30,
      handStrength: 100,
      scenario: {
        bettingInformation: {
          pot: 100,
          currentBettingRound: [30],
        },
        communityCards: ['AH', 'JH', 'JD'],
        holeCards: ['AS', 'AD'],
      },
    }
    const result = Grade(wrongAnswer)
    expect(result.score).toEqual(0)
    expect(result.potOddsCorrect).toBe(false)
    expect(result.handStrengthCorrect).toBe(false)
  })

  it('Returns a 0.5 and true/false if the pot odds are correct but the hand strength is not', () => {
    const partialAnswer = {
      potOdds: 30,
      handStrength: 100,
      scenario: {
        bettingInformation: {
          pot: 70,
          currentBettingRound: [30],
        },
        communityCards: ['AH', 'JH', 'JD'],
        holeCards: ['AS', 'AD'],
      },
    }
    const result = Grade(partialAnswer)
    expect(result.score).toEqual(0.5)
    expect(result.potOddsCorrect).toBe(true)
    expect(result.handStrengthCorrect).toBe(false)
  })

  it('Returns a 0.5 and false/true if the hand strength is correct but the pot odds are not', () => {
    const partialAnswer = {
      potOdds: 30,
      handStrength: 4,
      scenario: {
        bettingInformation: {
          pot: 100,
          currentBettingRound: [30],
        },
        communityCards: ['AH', 'JH', 'JD'],
        holeCards: ['AS', 'AD'],
      },
    }
    const result = Grade(partialAnswer)
    expect(result.score).toEqual(0.5)
    expect(result.potOddsCorrect).toBe(false)
    expect(result.handStrengthCorrect).toBe(true)
  })

  it('Returns a 1 and true/true if the answer is correct', () => {
    const correctAnswer = {
      potOdds: 30,
      handStrength: 4,
      scenario: {
        bettingInformation: {
          pot: 70,
          currentBettingRound: [30],
        },
        communityCards: ['AH', 'JH', 'JD'],
        holeCards: ['AS', 'AD'],
      },
    }
    const result = Grade(correctAnswer)
    expect(result.score).toEqual(1)
    expect(result.potOddsCorrect).toBe(true)
    expect(result.handStrengthCorrect).toBe(true)
  })
})
