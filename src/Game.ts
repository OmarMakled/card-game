import Card from './Card';
import Joker from './Joker';
import ICard from './ICard';
import config from './config';

export default class Game{
  #cards: ICard[];
  #selected: ICard[];

  constructor(){
    this.#cards = [];
    this.#selected = [];
  }

  start(): this{
    this.#cards = [];
    const {value, suit} = config;

    for(const v of value){
      for(const s of suit){
        this.#cards.push(new Card(v, s));
      }
    }
    this.#cards.push(new Joker());
    this.#cards.push(new Joker());
    this.#cards.sort(() => Math.random() - 0.5)

    return this;
  }

  getCards(): ICard[] {
    return this.#cards;
  }

  select(card: ICard): void|boolean{
    if (this.#selected.length === 1){
      this.#selected.push(card);

      return this.match();
    }

    this.#selected.push(card);
  }

  match(): boolean{
    const selected = [...this.#selected];
    this.#selected = [];

    if (selected[0].isJoker() || selected[1].isJoker()){
      return true;
    }

    if(selected[0].getValue() === selected[1].getValue()) {
        return true;
    }

    return false;
  }
}