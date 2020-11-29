const Grade = (payload) => {
  const potOddsAnswer = payload.potOdds
  const handStrengthAnswer = payload.handStrength
  const pot = payload.scenario.bettingInformation.pot
  const callAmount = Math.max(
    ...payload.scenario.bettingInformation.currentBettingRound
  )
  const finalPotSize = pot + callAmount
  const actualPotOdds = Math.round((callAmount / finalPotSize) * 100)
  let grade = 0
  if (actualPotOdds === potOddsAnswer) {
    grade += 0.5
  }
  return grade
}

export default Grade
