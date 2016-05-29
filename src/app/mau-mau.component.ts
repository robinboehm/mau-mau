import { Component } from '@angular/core';
import {CardComponent} from "./card/card.component";
import {HandOfCardsComponent} from "./hand-of-cards/hand-of-cards.component";
import {DeckComponent} from "./deck/deck.component";
import {PileComponent} from "./pile/pile.component";


@Component({
  moduleId: module.id,
  selector: 'mau-mau-app',
  templateUrl: 'mau-mau.component.html',
  styleUrls: ['mau-mau.component.css'],
  directives: [CardComponent, HandOfCardsComponent, DeckComponent, PileComponent]
})
export class MauMauAppComponent {
  currentDeck;
  pile;
  computerCards;
  playerCards;
  myTurn;
  cardsToDraw;


  constructor() {
    this.currentDeck = this.shuffle(this.generateCardDeck());
    this.pile = [];
    this.computerCards = this.getPlayersCards(7);
    this.playerCards = this.getPlayersCards(7);
    this.drawCard(this.pile);
    this.myTurn = true;
    this.cardsToDraw = 0;
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

  getPlayersCards(numberOfCards) {
    let playersCards = [];

    for (let i = 0; i < numberOfCards; i++) {
      playersCards.push(this.currentDeck.pop())
    }
    return playersCards

  }


  drawCard(destination) {
    destination.push(this.currentDeck.pop());
    this.myTurn = !this.myTurn
  }

  discardCard($event) {
    let card = $event;

    if (this.isCardValid(card)) { // Ist die aktuelle Karte legbar?
      this.pile.push(card); // Leg die Karte auf dem Pile

      // Nimm die Karte aus meiner Hand
      this.playerCards = this.playerCards.filter((element) => element != card);

      if (card.rank === '8') { // Wenn wir ne 8 gelegt haben
        // sind wir wieder dran
        this.myTurn = true;
      } else if (card.rank === '7') { // außer die Karte ist eine 7
        this.cardsToDraw += 2; //wird Zieh-Counter um 2 erhöht
        // wenn Gegner auch eine 7 hat
        if (this.containsSeven(this.computerCards)) {

        } else {
          // wenn Gegner keine 7 hat, dann muss Gegner Karten ziehen
          for (let i = 0; i < this.cardsToDraw; i++) {
            this.computerCards.push(this.currentDeck.pop())
          }
          // Zieh-Counter wird wieder auf 0 gesetzt
          this.cardsToDraw = 0;
          // und wir sind wieder dran
          this.myTurn = true;

        }


      }
      else {
        // In allen anderen Fällen ist der andere normal dran
        this.myTurn = false;
      }


    }

  }

  shuffle(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Expected an array');
    }

    var rand;
    var tmp;
    var len = arr.length;
    var ret = arr.slice();

    while (len) {
      rand = Math.floor(Math.random() * len--);
      tmp = ret[len];
      ret[len] = ret[rand];
      ret[rand] = tmp;
    }

    return ret;
  }


  computerDiscard() {
    let card = this.computerCards.pop();
    this.pile.push(card);
    this.myTurn = true;
  }

  isCardValid(card) {
    let topCard = this.pile[this.pile.length - 1];
    let isSameSuit = (card.suit === topCard.suit);
    let isSameRank = (card.rank === topCard.rank);
    let isCardJack = card.rank === 'J';
    return (isSameSuit || isSameRank || isCardJack) && this.myTurn;
  }

  containsSeven(cardDeck) {
    return cardDeck.some(card => card.rank === '7');
  }


}


