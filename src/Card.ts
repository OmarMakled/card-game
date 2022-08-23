import ICard from "./ICard";

export default class Card implements ICard{
  #value;

  #suit;

  constructor(value: string, suit: string){
    this.#value = value;
    this.#suit = suit;
  }

  render(): string {
    return `${this.#suit} of ${this.#value}`;
  }

  getValue(): string {
    return this.#value;
  }

  isJoker(): boolean{
    return false
  }
}