import React, { useState } from 'react'
import Scenario from '../../lib/scenarios/scenario'

const Table = () => {
  const [scenario, setScenario] = useState(Scenario())
  const [potOdds, setPotOdds] = useState('')
  const [handStrength, setHandStrength] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {
      potOdds,
      handStrength,
      scenario,
    }
    fetch('/.netlify/functions/grading', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

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
      <form data-cy="answerForm" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="potOdds">What are your pot odds?</label>
        <input
          data-cy="potOdds"
          name="potOdds"
          value={potOdds}
          onChange={(event) => setPotOdds(event.target.value)}
          required={true}
        />
        <br></br>
        <label htmlFor="handStrength">
          What is your approximate hand strength?
        </label>
        <input
          data-cy="handStrength"
          name="handStrength"
          value={handStrength}
          onChange={(event) => setHandStrength(event.target.value)}
          required={true}
        />
        <br></br>
        <button data-cy="submitAnswer">Submit</button>
      </form>
    </div>
  )
}

export default Table
