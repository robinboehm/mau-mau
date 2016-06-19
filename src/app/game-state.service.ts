import {Injectable} from '@angular/core';

@Injectable()
export class GameStateService {

  pile;
  cardsToDraw;
  myTurn;
  cardDeck;
  playerNeedsToChoose;
  playerHandOfCards;
  opponentHandOfCards;

  constructor() {
    this.pile = [];
    this.cardsToDraw = 0;
    this.myTurn = true;
    this.cardDeck = this.shuffle(this.generateCardDeck());
    this.playerNeedsToChoose = false;
    this.playerHandOfCards = [];
    this.opponentHandOfCards = [];
    for (let i = 0; i < 7; i++) {
      this.playerHandOfCards.push(this.cardDeck.pop());
      this.opponentHandOfCards.push(this.cardDeck.pop());
    }
    this.pile.push(this.cardDeck.pop());
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

  drawCard(source, destination) {
    destination.push(source.pop());
    this.myTurn = !this.myTurn;
  }


  isCardValid(card, pile) {
    let pileTopCard = pile[pile.length - 1];

    let suit;
    if (pileTopCard.wish) {
      suit = pileTopCard.wish
    }
    else {
      suit = pileTopCard.suit;
    }

    let isSameRank = (card.rank === pileTopCard.rank);
    let isSameSuit = (card.suit === suit);
    let isJack = (card.rank === 'J');
    let isJackOnJack = (pileTopCard.rank === 'J') && (card.rank === 'J');

    return (isSameRank || isSameSuit || isJack) && !isJackOnJack;
  }


  chooseSuit(newSuit, pile) {
    let jackCard = pile[pile.length - 1];

    jackCard.wish = newSuit;

    this.myTurn = !this.myTurn;
    this.playerNeedsToChoose = false;
  }

  takeCardsToDraw(handOfCards, cardDeck) {
    for (; this.cardsToDraw > 0; this.cardsToDraw--) {
      handOfCards.push(cardDeck.pop());
    }
  }
  //
  //computerDiscardCard(pile, opponentHandOfCards) {
  //  let pileTopCard = pile[pile.length - 1];
  //  for (let i = 0; i < opponentHandOfCards.length; i++) {
  //    if (this.isCardValid(opponentHandOfCards[i], pile)) {
  //      this.discardCard(card,pile,handOfCards,opponentHandofCards,cardDeck)
  //    }
  //  }
  //}

  discardCard(card, pile, handOfCards, opponentHandOfCards?, cardDeck?) {

    if (this.isCardValid(card, pile)) {
      // push card to pile
      pile.push(card);

      // remove card from hand of cards
      let resultHandOfCards = handOfCards.filter(function (cardOfHand) {
        return cardOfHand != card
      });

      if (card.rank == '8') {
        // this.myTurn = this.myTurn;
      } else if (card.rank == '7') {

        this.cardsToDraw = this.cardsToDraw + 2;

        let opponentHasASeven = opponentHandOfCards.some((card)=>card.rank == '7');

        if (!opponentHasASeven) {
          for (; this.cardsToDraw > 0; this.cardsToDraw--) {
            opponentHandOfCards.push(cardDeck.pop());
          }
        }
        else {
          this.myTurn = !this.myTurn;
          // Auswahl
        }

      } else if (card.rank == 'J') {
        this.playerNeedsToChoose = true;
      } else {
        this.myTurn = !this.myTurn;
      }


      return resultHandOfCards
    } else {
      return handOfCards;
    }

  }

}

