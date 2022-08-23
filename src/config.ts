interface IConfig {
  joker: string,
  suit: string[],
  value: string[]
}

const config: IConfig = {
  joker: 'Joker',
  suit: ['Heart', 'Diamond', 'Spade', 'Club'],
  value: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
}

export default config