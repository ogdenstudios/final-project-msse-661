const ShuffledDeck = () => {
  const deck = [
    'AS',
    'KS',
    'QS',
    'JS',
    'TS',
    '9S',
    '8S',
    '7S',
    '6S',
    '5S',
    '4S',
    '3S',
    '2S',
    'AH',
    'KH',
    'QH',
    'JH',
    'TH',
    '9H',
    '8H',
    '7H',
    '6H',
    '5H',
    '4H',
    '3H',
    '2H',
    'AD',
    'KD',
    'QD',
    'JD',
    'TD',
    '9D',
    '8D',
    '7D',
    '6D',
    '5D',
    '4D',
    '3D',
    '2D',
    'AC',
    'KC',
    'QC',
    'JC',
    'TC',
    '9C',
    '8C',
    '7C',
    '6C',
    '5C',
    '4C',
    '3C',
    '2C',
  ]
  // Shuffle the deck with Fisher-Yates
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * deck.length)
    const tempi = deck[i]
    const tempj = deck[j]

    deck[i] = tempj
    deck[j] = tempi
  }

  return deck
}

export default ShuffledDeck
