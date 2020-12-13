const randomInteger = (max, min) => {
  return Math.round(Math.random() * (max - min) + min)
}

export default randomInteger
