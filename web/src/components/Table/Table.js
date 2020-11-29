import React, { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import Scenario from '../../lib/scenarios/scenario'

// GraphQL Mutation
const CREATE_SCENARIO = gql`
  mutation CreateScenarioMutation($input: CreateScenarioInput!) {
    createScenario(input: $input) {
      id
    }
  }
`

const Table = () => {
  const { currentUser } = useAuth()
  const [create] = useMutation(CREATE_SCENARIO)
  const [scenario, setScenario] = useState(Scenario())
  const [potOdds, setPotOdds] = useState('')
  const [handStrength, setHandStrength] = useState('')
  const [score, setScore] = useState(0)
  const [potOddsCorrect, setPotOddsCorrect] = useState(false)
  const [handStrengthCorrect, setHandStrengthCorrect] = useState(false)
  const [graded, setGraded] = useState(false)

  const resetScenario = () => {
    setPotOdds('')
    setHandStrength('')
    setScenario(Scenario())
    setGraded(false)
    setScore(0)
    setPotOddsCorrect(false)
    setHandStrengthCorrect(false)
  }

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
      .then((data) => {
        setScore(data.score * 100)
        setPotOddsCorrect(data.potOddsCorrect)
        setHandStrengthCorrect(data.handStrengthCorrect)
        setGraded(true)
        create({
          variables: {
            input: {
              bettingInformation: JSON.stringify(scenario.bettingInformation),
              communityCards: JSON.stringify(scenario.communityCards),
              holeCards: JSON.stringify(scenario.holeCards),
              players: scenario.players,
              email: currentUser.email,
              score,
            },
          },
        })
      })
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
      <button onClick={() => resetScenario()}>New scenario</button>
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
        {graded && (
          <div>
            Your results:
            <ul>
              <li>Score: {score}</li>
              <li>Pot Odds Correct: {potOddsCorrect.toString()}</li>
              <li>Hand Strength Correct: {handStrengthCorrect.toString()}</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  )
}

export default Table
