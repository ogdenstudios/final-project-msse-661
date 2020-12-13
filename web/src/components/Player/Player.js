import React from 'react'

const Player = (props) => {
  return (
    <div className={`player${props.position}`}>
      <div>{props.action}</div>
    </div>
  )
}

export default Player
