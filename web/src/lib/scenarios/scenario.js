import RandomInteger from '../randomNumbers/randomInteger'

const Scenario = (deck) => {
  // Give the player the first two cards from the deck
  const holeCards = [deck[0], deck[1]]

  // Determine the community cards, based on a randomly selected betting round
  const communityCards = []
  const bettingRound = RandomInteger(3, 0)
  const numberOfCards = () => {
    switch (bettingRound) {
      case 0:
        return 0
      case 1:
        return 3
      case 2:
        return 4
      case 3:
        return 5
    }
  }

  for (let i = 0; i < numberOfCards; i++) {
    communityCards[i] = deck[i + 2]
  }

  // Randomly determine how many other players there are - must be between 1 and 8
  const players = RandomInteger(8, 1)

  // Return a set of community cards, hole cards, players, and betting information
  return {
    communityCards,
    holeCards,
    players,
  }
}

export default Scenario
