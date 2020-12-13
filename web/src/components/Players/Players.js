import React from 'react'

const Players = (props) => {
  return (
    <div>
      <div>{props.players}</div>
      <div>{props.playerActions}</div>
    </div>
  )
}

export default Players
