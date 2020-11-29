import Grade from './grade'

describe('Betting', () => {
  it('Returns a 0 if no part of the equation is correct', () => {
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
    expect(Grade(wrongAnswer)).toEqual(0)
  })

  it('Returns a 0.5 if the pot odds are correct but the hand strength is not', () => {
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
    expect(Grade(partialAnswer)).toEqual(0.5)
  })

  it('Returns a 0.5 if the hand strength is correct but the pot odds are not', () => {
    const partialAnswer = {
      potOdds: 30,
      handStrength: 2,
      scenario: {
        bettingInformation: {
          pot: 100,
          currentBettingRound: [30],
        },
        communityCards: ['AH', 'JH', 'JD'],
        holeCards: ['AS', 'AD'],
      },
    }
    expect(Grade(partialAnswer)).toEqual(0.5)
  })

  it('Returns a 1 if the answer is correct', () => {
    const correctAnswer = {
      potOdds: 30,
      handStrength: 2,
      scenario: {
        bettingInformation: {
          pot: 70,
          currentBettingRound: [30],
        },
        communityCards: ['AH', 'JH', 'JD'],
        holeCards: ['AS', 'AD'],
      },
    }
    expect(Grade(correctAnswer)).toEqual(1)
  })
})
