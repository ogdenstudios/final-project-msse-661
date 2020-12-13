import React, { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import Scenario from '../../lib/scenarios/scenario'
import CommunityCards from '../CommunityCards/CommunityCards'
import HoleCards from '../HoleCards/HoleCards'
import Players from '../Players/Players'
import AnswerForm from '../AnswerForm/AnswerForm'
import Grades from '../Grades/Grades'

// GraphQL Mutation
const CREATE_SCENARIO = gql`
  mutation CreateScenarioMutation($input: CreateScenarioInput!) {
    createScenario(input: $input) {
      id
    }
  }
`
const Table = () => {
  const [scenario, setScenario] = useState(Scenario())
  const { currentUser } = useAuth()
  const [create] = useMutation(CREATE_SCENARIO)
  const [score, setScore] = useState(0)
  const [potOddsCorrect, setPotOddsCorrect] = useState(false)
  const [handStrengthCorrect, setHandStrengthCorrect] = useState(false)
  const [graded, setGraded] = useState(false)
  const [attempts, setAttempts] = useState(0)

  const resetScenario = () => {
    setScenario(Scenario())
    setGraded(false)
    setScore(0)
    setPotOddsCorrect(false)
    setHandStrengthCorrect(false)
    setAttempts(attempts + 1)
  }

  const handleSubmit = (event, potOdds, handStrength) => {
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
    <div className="table">
      <CommunityCards cards={scenario.communityCards} />
      <HoleCards cards={scenario.holeCards} />
      <Players
        players={scenario.players}
        playerActions={scenario.bettingInformation.currentBettingRound}
      />
      <div>Pot: {scenario.bettingInformation.pot}</div>
      <button onClick={() => resetScenario()}>New scenario</button>
      <AnswerForm handleSubmit={handleSubmit} attempts={attempts} />
      {graded && (
        <Grades
          score={score}
          potOddsCorrect={potOddsCorrect}
          handStrengthCorrect={handStrengthCorrect}
        />
      )}
    </div>
  )
}

export default Table
