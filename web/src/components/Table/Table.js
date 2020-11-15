import React, { useState } from 'react'
import ShuffledDeck from '../../lib/deck/shuffledDeck'
import Scenario from '../../lib/scenarios/scenario'

const Table = () => {
  const [scenario, setScenario] = useState(Scenario(ShuffledDeck()))

  return (
    <div>
      <h2>Scenario:</h2>
      <div>Community cards: {scenario.communityCards}</div>
      <div>Hole cards: {scenario.holeCards}</div>
      <div>Players: {scenario.players}</div>
      <button onClick={() => setScenario(Scenario(ShuffledDeck()))}>
        New scenario
      </button>
    </div>
  )
}

export default Table
