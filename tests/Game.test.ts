import Game from '../src/Game';
import Card from '../src/Card';
import Joker from '../src/Joker';

describe('Game.start', () => {
  it('check it should start a game with 54 cards', () => {
    const gameObj = new Game;
    gameObj.start();
    expect(gameObj.getCards().length).toBe(54);
  });
});

describe('Game.match', () => {
  it('check it should return true for matched cards', () => {
    const gameObj = (new Game).start();
    const cardOne = new Card('1', '1');
    gameObj.select(cardOne);

    expect(gameObj.select(cardOne)).toBeTruthy();
  });

  it('check it should return true for joker cards', () => {
    const gameObj = (new Game).start();
    const jokerCard = new Joker();
    gameObj.select(jokerCard);

    expect(gameObj.select(new Card('1', '1'))).toBeTruthy();
  });
});