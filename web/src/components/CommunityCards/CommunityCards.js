import React from 'react'
import './communityCards.scss'

const CommunityCards = (props) => {
  return (
    <div className="communityCards">
      {props.cards.map((card) => {
        return (
          <div className="card" key={card}>
            {card}
          </div>
        )
      })}
      <div className="pot"> Pot: {props.pot}</div>
    </div>
  )
}

export default CommunityCards
