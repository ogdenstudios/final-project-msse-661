import Betting from '../betting/betting'
import RandomInteger from '../randomNumbers/randomInteger'
import ShuffledDeck from '../deck/shuffledDeck'

const Scenario = () => {
  // Create a shuffled deck for this scenario
  const deck = ShuffledDeck()

  // Give the player the first two cards from the deck
  const holeCards = [deck[0], deck[1]]

  // Determine the community cards, based on a randomly selected betting round
  const communityCards = []
  const bettingRound = RandomInteger(4, 0)
  const numberOfCards = [0, 3, 4, 5]

  for (let i = 0; i < numberOfCards[bettingRound]; i++) {
    communityCards[i] = deck[i + 2]
  }

  // Randomly determine how many other players there are - must be between 1 and 8
  const players = RandomInteger(8, 1)

  // Create a new set of betting information based on the round and number of players
  const bettingInformation = Betting(bettingRound, players)

  // Return a set of community cards, hole cards, players, and betting information
  return {
    bettingInformation,
    communityCards,
    holeCards,
    players,
  }
}

export default Scenario
