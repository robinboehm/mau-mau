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
  directives: [CardComponent,HandOfCardsComponent,DeckComponent,PileComponent]
})
export class MauMauAppComponent {
  currentDeck;
  pile;
  player1Cards;
  player2Cards;
  myTurn;


  constructor(){
    this.currentDeck= this.shuffle(this.generateCardDeck());
    this.pile=[];
    this.player1Cards=this.getPlayersCards(7);
    this.player2Cards=this.getPlayersCards(7);
    this.drawCard(this.pile);
    this.myTurn=true;
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

    for(let i=0; i<numberOfCards;i++){
      playersCards.push(this.currentDeck.pop())
    }
    return playersCards

  }


  drawCard(destination){
    destination.push(this.currentDeck.pop());
    this.myTurn=!this.myTurn
  }

  discardCard($event){
    let card = $event;
    if(this.isCardValid(card)){
      this.pile.push(card);
      this.player2Cards = this.player2Cards.filter((element) => element != card);
      if(card.rank !== '8'){
        this.myTurn=false;
      }

    }

  }

  shuffle(arr){
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


  computerDiscard(){
    let card = this.player1Cards.pop();
    this.pile.push(card);
    this.myTurn=true;
  }

  isCardValid(card){
    let topCard = this.pile[this.pile.length-1];
    let isSameSuit = (card.suit === topCard.suit);
    let isSameRank = (card.rank === topCard.rank);
    let isCardJack = card.rank === 'J';
    return (isSameSuit || isSameRank || isCardJack) && this.myTurn;
  }




}


