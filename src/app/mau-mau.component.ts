import { Component } from '@angular/core';
import {CardComponent} from "./card/card.component";
import {HandOfCardsComponent} from "./hand-of-cards/hand-of-cards.component";
import {DeckComponent} from "./deck/deck.component";



@Component({
  moduleId: module.id,
  selector: 'mau-mau-app',
  templateUrl: 'mau-mau.component.html',
  styleUrls: ['mau-mau.component.css'],
  directives: [CardComponent,HandOfCardsComponent,DeckComponent]
})
export class MauMauAppComponent {
  currentDeck;
  player1Cards;
  player2Cards;

  constructor(){
    this.currentDeck=this.generateCardDeck();
    this.player1Cards=this.getPlayersCards(7);
    this.player2Cards=this.getPlayersCards(7);
  }

  generateCardDeck() {
    let cardDeck = [];
    let suits = ['C', 'H', 'S', 'D'];
    let ranks = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let suit of suits){
      for(let rank of ranks){
        let card = {
          rank: rank,
          suit: suit
        };
        cardDeck.push(card);
      }
    }
    return cardDeck;
  }

  getPlayersCards(numberOfCards){
    let playersCards = [];
    let cardDeck = this.currentDeck;

    for(let i=0; i<numberOfCards;i++){
      playersCards.push(this.currentDeck.pop())
    }
    return playersCards

  }


  drawCard(){
    this.player2Cards.push(this.currentDeck.pop());

  }
}
