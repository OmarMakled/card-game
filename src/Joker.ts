import ICard from './ICard';
import config from './config'

export default class Joker implements ICard{
  #value;

  constructor(){
    this.#value = config.joker;
  }

  render(): string {
    return this.#value;
  }

  getValue(): string {
    return this.#value;
  }

  isJoker(): boolean{
    return true
  }
}