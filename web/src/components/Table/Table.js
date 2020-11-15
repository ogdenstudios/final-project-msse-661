import React, { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
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
  const [create] = useMutation(CREATE_SCENARIO)
  const [scenario, setScenario] = useState(Scenario())

  const generateAndSaveNewScenario = () => {
    const newScenario = Scenario()
    setScenario(newScenario)
    create({
      variables: {
        input: {
          bettingInformation: JSON.stringify(newScenario.bettingInformation),
          communityCards: JSON.stringify(newScenario.communityCards),
          holeCards: JSON.stringify(newScenario.holeCards),
          players: newScenario.players,
        },
      },
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
      <button onClick={() => generateAndSaveNewScenario()}>New scenario</button>
    </div>
  )
}

export default Table
