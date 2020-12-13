import React from 'react'
import robot1 from './robot_1.jpg'
import robot2 from './robot_2.jpg'
import robot3 from './robot_3.jpg'
import robot4 from './robot_4.jpg'
import robot5 from './robot_5.jpg'
import robot6 from './robot_6.jpg'
import robot7 from './robot_7.jpg'
import robot8 from './robot_8.jpg'
import './player.scss'

const Player = (props) => {
  const robots = [
    robot1,
    robot2,
    robot3,
    robot4,
    robot5,
    robot6,
    robot7,
    robot8,
  ]

  const action = () => {
    if (props.action > 0) {
      return `Bet: ${props.action}`
    } else {
      return 'Fold'
    }
  }

  return (
    <div className={`player position${props.position}`}>
      <img src={robots[props.position]} />
      <div>{action()}</div>
    </div>
  )
}

export default Player
