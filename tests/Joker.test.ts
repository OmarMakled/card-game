import Joker from '../src/Joker';
import config from '../src/config';

describe('Joker.render', () => {
  it('it should create new card', () => {
    const newCard = new Joker();
    expect(newCard.render()).toBe('Joker');
  });
});

describe('Card.getValue', () => {
  it('it should return its value', () => {
    const newCard = new Joker();
    expect(newCard.getValue()).toBe(config.joker);
  });
});

describe('Joker.isJoker', () => {
  it('it should return true', () => {
    const newCard = new Joker();
    expect(newCard.isJoker()).toBeTruthy();
  });
});