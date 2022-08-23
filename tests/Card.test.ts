import Card from '../src/Card';

describe('Card.render', () => {
  it('it should create new card', () => {
    const newCard = new Card('1', '3');
    expect(newCard.render()).toBe('3 of 1');
  });
});

describe('Card.getValue', () => {
  it('it should return its value', () => {
    const newCard = new Card('1', '2');
    expect(newCard.getValue()).toBe('1');
  });
});

describe('Card.isJoker', () => {
  it('it should return false', () => {
    const newCard = new Card('1', '2');
    expect(newCard.isJoker()).toBeFalsy();
  });
});