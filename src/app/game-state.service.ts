import { Injectable } from '@angular/core';

@Injectable()
export class GameStateService {

  pile;
  cardsToDraw;
  myTurn;

  constructor() {
    this.pile = [];
    this.cardsToDraw = 0;
    this.myTurn=true;
  }

  generateCardDeck() {
    let cardDeck = [];
    let suits = ['C', 'H', 'S', 'D'];
    let ranks = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let suit of suits) {
      for (let rank of ranks) {
        let card = {
          rank: rank,
          suit: suit
        };
        cardDeck.push(card);
      }
    }
    return cardDeck;
  }
}
