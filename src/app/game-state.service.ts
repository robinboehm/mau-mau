import {Injectable} from '@angular/core';

@Injectable()
export class GameStateService {

  pile;
  cardsToDraw;
  myTurn;
  cardDeck;

  constructor() {
    this.pile = [];
    this.cardsToDraw = 0;
    this.myTurn = true;
    this.cardDeck = this.generateCardDeck();
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

  drawCard(source, destination) {
    destination.push(source.pop());
    this.myTurn = !this.myTurn;
  }


  isCardValid(card, pile) {
    let pileTopCard = pile[pile.length - 1];
    let isSameRank = (card.rank === pileTopCard.rank);
    let isSameSuit = (card.suit === pileTopCard.suit);
    let isJack = (card.rank === 'J');
    let isJackOnJack = (pileTopCard.rank === 'J') && (card.rank === 'J');

    return (isSameRank || isSameSuit || isJack) && !isJackOnJack;
  }

  discardCard(card, pile, handOfCards, opponentHandOfCards?, cardDeck?) {

    if (this.isCardValid(card, pile)) {
      // push card to pile
      pile.push(card);

      // remove card from hand of cards
      let resultHandOfCards = handOfCards.filter(function (cardOfHand) {
        return cardOfHand != card
      });

      if(card.rank == '8'){
        // this.myTurn = this.myTurn;
      } else if(card.rank == '7'){

        this.cardsToDraw = this.cardsToDraw+2;

        let opponentHasASeven = opponentHandOfCards.some((card)=>card.rank == '7');

        if(!opponentHasASeven){
          for(;this.cardsToDraw>0;this.cardsToDraw--){
            opponentHandOfCards.push(cardDeck.pop());
          }
        }
        else{
          this.myTurn = !this.myTurn;
          // Auswahl
        }

      } else{
        this.myTurn = !this.myTurn;
      }


      return resultHandOfCards
    } else {
      return handOfCards;
    }

  }

}

