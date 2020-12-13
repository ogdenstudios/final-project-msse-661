import React from 'react'
import './holeCards.scss'

const HoleCards = (props) => {
  return (
    <div className="holeCards">
      {props.cards.map((card) => {
        return (
          <div className="card" key={card}>
            {card}
          </div>
        )
      })}
    </div>
  )
}

export default HoleCards
