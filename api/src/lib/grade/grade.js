const Grade = (payload) => {
  const pot = payload.scenario.bettingInformation.pot
  const callAmount = Math.max(
    ...payload.scenario.bettingInformation.currentBettingRound
  )
  const finalPotSize = pot + callAmount
  if (finalPotSize) {
    return 0
  }
}

export default Grade
