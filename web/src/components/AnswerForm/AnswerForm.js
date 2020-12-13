import React, { useEffect, useState } from 'react'

const AnswerForm = (props) => {
  const [potOdds, setPotOdds] = useState('')
  const [handStrength, setHandStrength] = useState('')

  useEffect(() => {
    setPotOdds('')
    setHandStrength('')
  }, [props.attempts])

  return (
    <form
      data-cy="answerForm"
      onSubmit={(event) => props.handleSubmit(event, potOdds, handStrength)}
    >
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
  )
}

export default AnswerForm
