import React, { useState } from 'react'
import Scenario from '../../lib/scenarios/scenario'

const Table = () => {
  const [scenario, setScenario] = useState(Scenario())

  return (
    <div>
      <h2>Scenario:</h2>
      <div>Community cards: {scenario.communityCards}</div>
      <div>Hole cards: {scenario.holeCards}</div>
      <div>Players: {scenario.players}</div>
      <div>Pot: {scenario.bettingInformation.pot}</div>
      <div>
        Betting round: {scenario.bettingInformation.currentBettingRound}
      </div>
      <button onClick={() => setScenario(Scenario())}>New scenario</button>
    </div>
  )
}

export default Table
