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
  // currentDeck;
  // computerCards;
  // playerCards;
  //
  //
  // constructor() {
  //   this.currentDeck = this.shuffle(this.generateCardDeck());
  //   this.computerCards = this.getPlayersCards(7);
  //   this.playerCards = this.getPlayersCards(7);
  //   this.drawCard(this.pile);
  // }
  //
  //
  //
  // getPlayersCards(numberOfCards) {
  //   let playersCards = [];
  //
  //   for (let i = 0; i < numberOfCards; i++) {
  //     playersCards.push(this.currentDeck.pop())
  //   }
  //   return playersCards
  //
  // }
  //
  // shuffle(arr) {
  //   if (!Array.isArray(arr)) {
  //     throw new TypeError('Expected an array');
  //   }
  //
  //   var rand;
  //   var tmp;
  //   var len = arr.length;
  //   var ret = arr.slice();
  //
  //   while (len) {
  //     rand = Math.floor(Math.random() * len--);
  //     tmp = ret[len];
  //     ret[len] = ret[rand];
  //     ret[rand] = tmp;
  //   }
  //
  //   return ret;
  // }
  //
  //
  // drawCard(source ,destination) {
  //   destination.push(this.currentDeck.pop());
  //   this.myTurn = !this.myTurn
  // }
  //
  // handleDiscardEight() {
  //   // wenn wir eine 8 legen, sind wir wieder dran
  //   // this.myTurn = this.myTurn;
  // }
  //
  // handleDiscardSeven(opponentCardDeck) {
  //   // außer die Karte ist eine 7
  //   this.cardsToDraw += 2; //wird Zieh-Counter um 2 erhöht
  //   // wenn Gegner auch eine 7 hat
  //   if (this.containsSeven(opponentCardDeck)) {
  //
  //   } else {
  //     // wenn Gegner keine 7 hat, dann muss Gegner Karten ziehen
  //     for (let i = 0; i < this.cardsToDraw; i++) {
  //       opponentCardDeck.push(this.currentDeck.pop())
  //     }
  //     // Zieh-Counter wird wieder auf 0 gesetzt
  //     this.cardsToDraw = 0;
  //     // und wir sind wieder dran
  //     // this.myTurn = true;
  //
  //   }
  // }
  //
  // discardCard($event, currentPlayerCardDeck, opponentCardDeck) {
  //   let card = $event;
  //
  //   if (this.isCardValid(card)) { // Ist die aktuelle Karte legbar?
  //     this.pile.push(card); // Leg die Karte auf dem Pile
  //
  //     // Nimm die Karte aus meiner Hand
  //     currentPlayerCardDeck = currentPlayerCardDeck.filter((element) => element != card);
  //
  //     if (card.rank === '8') {
  //       this.handleDiscardEight();
  //     } else if (card.rank === '7') {
  //       this.handleDiscardSeven(opponentCardDeck);
  //     }
  //     else {
  //       // In allen anderen Fällen ist der andere normal dran
  //       this.myTurn = !this.myTurn;
  //     }
  //
  //   }
  //
  //   return currentPlayerCardDeck;
  // }
  //
  // computerDiscard() {
  //   for (let card of this.computerCards){
  //     if (this.isCardValid(card)){
  //       this.computerCards = this.discardCard(card,this.computerCards,this.playerCards);
  //       return;
  //     }
  //   }
  //   this.drawCard(this.computerCards);
  //
  //   //let card = this.computerCards.pop();
  //
  //   //this.discardCard(card,this.computerCards,this.playerCards);
  // }
  //
  // isCardValid(card) {
  //   let topCard = this.pile[this.pile.length - 1];
  //   let isSameSuit = (card.suit === topCard.suit);
  //   let isSameRank = (card.rank === topCard.rank);
  //   let isCardJack = card.rank === 'J';
  //   return (isSameSuit || isSameRank || isCardJack);
  // }
  //
  // containsSeven(cardDeck) {
  //   return cardDeck.some(card => card.rank === '7');
  // }


}


