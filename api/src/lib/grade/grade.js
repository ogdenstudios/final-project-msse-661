const Grade = (payload) => {
  // Calculate pot odds
  const pot = payload.scenario.bettingInformation.pot
  const callAmount = Math.max(
    ...payload.scenario.bettingInformation.currentBettingRound
  )
  const finalPotSize = pot + callAmount
  const actualPotOdds = Math.round((callAmount / finalPotSize) * 100)

  // Calculate hand strength
  const numberOfOuts = calculateOuts(
    payload.scenario.holeCards,
    payload.scenario.communityCards
  )

  const actualHandStrength = () => {
    if (payload.scenario.communityCards.length === 3) {
      return numberOfOuts * 4
    } else {
      return numberOfOuts * 2
    }
  }

  // Grade the answers
  let grade = 0
  if (actualPotOdds === payload.potOdds) {
    grade += 0.5
  }
  if (actualHandStrength() === payload.handStrength) {
    grade += 0.5
  }
  return grade

  function calculateOuts(holeCards, communityCards) {
    const Hand = require('pokersolver').Hand
    const deck = [
      'AS',
      'KS',
      'QS',
      'JS',
      'TS',
      '9S',
      '8S',
      '7S',
      '6S',
      '5S',
      '4S',
      '3S',
      '2S',
      'AH',
      'KH',
      'QH',
      'JH',
      'TH',
      '9H',
      '8H',
      '7H',
      '6H',
      '5H',
      '4H',
      '3H',
      '2H',
      'AD',
      'KD',
      'QD',
      'JD',
      'TD',
      '9D',
      '8D',
      '7D',
      '6D',
      '5D',
      '4D',
      '3D',
      '2D',
      'AC',
      'KC',
      'QC',
      'JC',
      'TC',
      '9C',
      '8C',
      '7C',
      '6C',
      '5C',
      '4C',
      '3C',
      '2C',
    ]

    // Add cards on table to an array as objects, to be assigned to an object later
    const cardsOnTable = holeCards.concat(communityCards)
    // Get the current solved hand on the table
    const currentHand = Hand.solve(cardsOnTable)

    const numberOfOuts = deck.reduce((acc, card) => {
      if (cardsOnTable.includes(card)) {
        return acc + 0
      } else {
        const newCardsOnTable = cardsOnTable.concat([card])
        const newHand = Hand.solve(newCardsOnTable)
        const winner = Hand.winners([currentHand, newHand])
        if (winner.length === 2) {
          return acc + 0
        } else if (winner[0].name === currentHand.name) {
          return acc + 0
        } else {
          return acc + 1
        }
      }
    }, 0)

    return numberOfOuts
  }
}

export default Grade
