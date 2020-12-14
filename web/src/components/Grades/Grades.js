import React from 'react'

const Grades = (props) => {
  return (
    <div className="my-8 mx-auto">
      Your results:
      <ul>
        <li>Score: {props.score}</li>
        <li>Pot Odds Correct: {props.potOddsCorrect.toString()}</li>
        <li>Hand Strength Correct: {props.handStrengthCorrect.toString()}</li>
      </ul>
    </div>
  )
}

export default Grades
