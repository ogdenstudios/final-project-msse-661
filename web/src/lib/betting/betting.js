import RandomInteger from '../randomNumbers/randomInteger'

const Betting = (bettingRound, numberOfPlayers) => {
  const preFlop = []
  const flop = []
  const turn = []
  const river = []
  const allBettingRounds = [preFlop, flop, turn, river]

  const highBet = RandomInteger(100, 3)
  const playerActions = ['call', 'fold']
  for (let i = 0; i <= bettingRound; i++) {
    for (let j = 0; j < numberOfPlayers; j++) {
      let playerChoice =
        playerActions[RandomInteger(playerActions.length - 1, 0)]
      switch (playerChoice) {
        case 'call':
          allBettingRounds[i][j] = highBet
          break
        case 'fold':
          allBettingRounds[i][j] = 0
          break
      }
    }
  }

  const pot = allBettingRounds.flat().reduce((acc, val) => acc + val, 0)
  const currentBettingRound = allBettingRounds[bettingRound].slice(
    0,
    numberOfPlayers
  )
  return {
    currentBettingRound,
    pot,
  }
}

export default Betting
