import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import {GameStateService} from './game-state.service';

describe('GameState Service', () => {
  beforeEachProviders(() => [GameStateService]);


  describe('inital state', () => {
    it('should initialize an empty pile',
      inject([GameStateService], (service:GameStateService) => {
        expect(service.pile).toEqual([]);
      }));

    it('should initialize cards to draw with 0',
      inject([GameStateService], (service:GameStateService) => {
        expect(service.cardsToDraw).toEqual(0);
      }));

    it('should start with me as first player',
      inject([GameStateService], (service:GameStateService) => {
        expect(service.myTurn).toEqual(true);
      }));

    it('should start with 32 cards at cardDeck',
      inject([GameStateService], (service:GameStateService) => {
        expect(service.cardDeck.length).toEqual(32);
      }));

    it('should initialize playerNeedsToChoose with false',
      inject([GameStateService], (service:GameStateService) => {
        expect(service.playerNeedsToChoose).toEqual(false);
      }));
  });


  describe('generateCardDeck', () => {
    it('should generate 32 cards',
      inject([GameStateService], (service:GameStateService) => {
        let theNewCardDeck = service.generateCardDeck();
        expect(theNewCardDeck.length).toEqual(32);
      }));

    it('should generate the correct cards',
      inject([GameStateService], (service:GameStateService) => {
        let theNewCardDeck = service.generateCardDeck();
        expect(theNewCardDeck).toContain({rank: '7', suit: 'C'});
        expect(theNewCardDeck).toContain({rank: '8', suit: 'C'});
        expect(theNewCardDeck).toContain({rank: '9', suit: 'C'});
        expect(theNewCardDeck).toContain({rank: '10', suit: 'C'});
        expect(theNewCardDeck).toContain({rank: 'J', suit: 'C'});
        expect(theNewCardDeck).toContain({rank: 'Q', suit: 'C'});
        expect(theNewCardDeck).toContain({rank: 'K', suit: 'C'});
        expect(theNewCardDeck).toContain({rank: 'A', suit: 'C'});

        expect(theNewCardDeck).toContain({rank: '7', suit: 'H'});
        expect(theNewCardDeck).toContain({rank: '8', suit: 'H'});
        expect(theNewCardDeck).toContain({rank: '9', suit: 'H'});
        expect(theNewCardDeck).toContain({rank: '10', suit: 'H'});
        expect(theNewCardDeck).toContain({rank: 'J', suit: 'H'});
        expect(theNewCardDeck).toContain({rank: 'Q', suit: 'H'});
        expect(theNewCardDeck).toContain({rank: 'K', suit: 'H'});
        expect(theNewCardDeck).toContain({rank: 'A', suit: 'H'});

        expect(theNewCardDeck).toContain({rank: '7', suit: 'S'});
        expect(theNewCardDeck).toContain({rank: '8', suit: 'S'});
        expect(theNewCardDeck).toContain({rank: '9', suit: 'S'});
        expect(theNewCardDeck).toContain({rank: '10', suit: 'S'});
        expect(theNewCardDeck).toContain({rank: 'J', suit: 'S'});
        expect(theNewCardDeck).toContain({rank: 'Q', suit: 'S'});
        expect(theNewCardDeck).toContain({rank: 'K', suit: 'S'});
        expect(theNewCardDeck).toContain({rank: 'A', suit: 'S'});

        expect(theNewCardDeck).toContain({rank: '7', suit: 'D'});
        expect(theNewCardDeck).toContain({rank: '8', suit: 'D'});
        expect(theNewCardDeck).toContain({rank: '9', suit: 'D'});
        expect(theNewCardDeck).toContain({rank: '10', suit: 'D'});
        expect(theNewCardDeck).toContain({rank: 'J', suit: 'D'});
        expect(theNewCardDeck).toContain({rank: 'Q', suit: 'D'});
        expect(theNewCardDeck).toContain({rank: 'K', suit: 'D'});
        expect(theNewCardDeck).toContain({rank: 'A', suit: 'D'});


      }));

  });

  describe('drawCard method', () => {

    it('should draw a card from the top of the source cardDeck',
      inject([GameStateService], (service:GameStateService) => {
        let sampleCardDeck = [{rank: '7', suit: 'H'}, {rank: '8', suit: 'H'}];
        let sampleHandOfCards = [];

        service.drawCard(sampleCardDeck, sampleHandOfCards);

        expect(sampleCardDeck.length).toEqual(1);
        expect(sampleCardDeck).toContain({rank: '7', suit: 'H'})
        expect(sampleCardDeck).not.toContain({rank: '8', suit: 'H'})

      }));

    it('should put the card in the destination handOfCards',
      inject([GameStateService], (service:GameStateService) => {
        let sampleCardDeck = [{rank: '7', suit: 'H'}, {rank: '8', suit: 'H'}];
        let sampleHandOfCards = [];

        service.drawCard(sampleCardDeck, sampleHandOfCards);

        expect(sampleHandOfCards.length).toEqual(1);
        expect(sampleHandOfCards).toContain({rank: '8', suit: 'H'})

      }));

    it('should be the other players turn after drawing',
      inject([GameStateService], (service:GameStateService) => {
        let sampleCardDeck = [{rank: '7', suit: 'H'}, {rank: '8', suit: 'H'}];
        let sampleHandOfCards = [];
        service.myTurn = false;

        service.drawCard(sampleCardDeck, sampleHandOfCards)

        expect(service.myTurn).toEqual(true)

      }));

  });

  describe('discardCard method', () => {
    it('should move the discarded card from hand of cards to the pile',
      inject([GameStateService], (service:GameStateService) => {
        let sampleHandOfCards = [{rank: '9', suit: 'D'}, {rank: '8', suit: 'S'}];
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '7', suit: 'S'}]
        let sampleCard = sampleHandOfCards[1]

        sampleHandOfCards = service.discardCard(sampleCard, samplePile, sampleHandOfCards)

        expect(sampleHandOfCards).not.toContain({rank: '8', suit: 'S'})
        expect(samplePile).toContain({rank: '8', suit: 'S'})

      }));

    it('should check if discarded card is valid, if not do not discard',
      inject([GameStateService], (service:GameStateService) => {
        let sampleHandOfCards = [{rank: '9', suit: 'D'}, {rank: '8', suit: 'S'}];
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '7', suit: 'D'}];
        let sampleCard = sampleHandOfCards[1];

        sampleHandOfCards = service.discardCard(sampleCard, samplePile, sampleHandOfCards)

        expect(sampleHandOfCards).toContain({rank: '8', suit: 'S'});
        expect(samplePile).not.toContain({rank: '8', suit: 'S'});

      }));


    it('should change the current player if a card is discarded',
      inject([GameStateService], (service:GameStateService) => {
        let sampleHandOfCards = [{rank: '9', suit: 'D'}, {rank: '9', suit: 'S'}];
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'D'}];
        let sampleCard = sampleHandOfCards[1];


        let myTurnBefore = service.myTurn;

        service.discardCard(sampleCard, samplePile, sampleHandOfCards)

        expect(service.myTurn).not.toBe(myTurnBefore)


      }));

    it('should not change the current player if an 8-card is discarded',
      inject([GameStateService], (service:GameStateService) => {
        let sampleHandOfCards = [{rank: '9', suit: 'D'}, {rank: '8', suit: 'S'}];
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
        let sampleCard = sampleHandOfCards[1];


        let myTurnBefore = service.myTurn;

        service.discardCard(sampleCard, samplePile, sampleHandOfCards)

        expect(service.myTurn).toBe(myTurnBefore)


      }));


    describe('discard J', () => {

      it('should make player choose the suit',
        inject([GameStateService], (service:GameStateService) => {
          let myHandOfCards = [{rank: '9', suit: 'D'}, {rank: 'J', suit: 'S'}];
          let opponentHandOfCards = [{rank: '10', suit: 'D'}];
          let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
          let sampleCard = myHandOfCards[1];
          let sampleCardDeck = service.generateCardDeck();


          expect(service.playerNeedsToChoose).toBe(false);

          myHandOfCards = service.discardCard(sampleCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(1);
          expect(opponentHandOfCards.length).toBe(1);
          expect(samplePile.length).toBe(3);
          expect(sampleCardDeck.length).toBe(32);

          expect(service.playerNeedsToChoose).toBe(true);
        }));


      it('should change the current player after choosing the suit',
        inject([GameStateService], (service:GameStateService) => {
          let myHandOfCards = [{rank: '9', suit: 'D'}, {rank: 'J', suit: 'S'}];
          let opponentHandOfCards = [{rank: '10', suit: 'D'}];
          let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
          let sampleCard = myHandOfCards[1];
          let sampleCardDeck = service.generateCardDeck();
          let currentTurn = service.myTurn;

          expect(service.playerNeedsToChoose).toBe(false);

          myHandOfCards = service.discardCard(sampleCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(1);
          expect(opponentHandOfCards.length).toBe(1);
          expect(samplePile.length).toBe(3);
          expect(sampleCardDeck.length).toBe(32);

          expect(service.playerNeedsToChoose).toBe(true);

          service.chooseSuit('D', samplePile);

          expect(currentTurn).toBe(!service.myTurn);
        }));


      it('should allow only chosen suit to be discarded next',
        inject([GameStateService], (service:GameStateService) => {
          let myHandOfCards = [{rank: '9', suit: 'D'}, {rank: 'J', suit: 'S'}];
          let opponentHandOfCards = [{rank: '10', suit: 'D'}];
          let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
          let sampleCard = myHandOfCards[1];
          let sampleCardDeck = service.generateCardDeck();
          let currentTurn = service.myTurn;

          expect(service.playerNeedsToChoose).toBe(false);

          myHandOfCards = service.discardCard(sampleCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(1);
          expect(opponentHandOfCards.length).toBe(1);
          expect(samplePile.length).toBe(3);
          expect(sampleCardDeck.length).toBe(32);

          expect(service.playerNeedsToChoose).toBe(true);

          service.chooseSuit('D', samplePile);

          expect(service.playerNeedsToChoose).toBe(false);

          expect(currentTurn).toBe(!service.myTurn);

          opponentHandOfCards = service.discardCard(opponentHandOfCards[0], samplePile, opponentHandOfCards, myHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(1);
          expect(opponentHandOfCards.length).toBe(0);
          expect(samplePile.length).toBe(4);
          expect(sampleCardDeck.length).toBe(32);
        }));

    });

    describe('discard 7', () => {

      it('should make opponent draw 2 cards',
        inject([GameStateService], (service:GameStateService) => {
          let myHandOfCards = [{rank: '9', suit: 'D'}, {rank: '7', suit: 'S'}];
          let opponentHandOfCards = [{rank: '10', suit: 'D'}];
          let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
          let sampleCard = myHandOfCards[1];
          let sampleCardDeck = service.generateCardDeck();


          myHandOfCards = service.discardCard(sampleCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(1);
          expect(opponentHandOfCards.length).toBe(3);
          expect(samplePile.length).toBe(3);
          expect(sampleCardDeck.length).toBe(30)


        }));

      it('should make me draw 4 cards when opponent also has a 7',
        inject([GameStateService], (service:GameStateService) => {
          let myHandOfCards = [{rank: '9', suit: 'D'}, {rank: '7', suit: 'S'}];
          let opponentHandOfCards = [{rank: '10', suit: 'D'}, {rank: '7', suit: 'D'}];
          let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
          let sampleCard = myHandOfCards[1];
          let sampleCardDeck = service.generateCardDeck();


          myHandOfCards = service.discardCard(sampleCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          opponentHandOfCards = service.discardCard(opponentHandOfCards[1], samplePile, opponentHandOfCards, myHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(5);
          expect(opponentHandOfCards.length).toBe(1);
          expect(samplePile.length).toBe(4);
          expect(sampleCardDeck.length).toBe(28)


        }));


      it('should make the opponent draw 6 cards when I have a second 7',
        inject([GameStateService], (service:GameStateService) => {
          let myHandOfCards = [{rank: '9', suit: 'D'}, {rank: '7', suit: 'S'},  {rank: '7', suit: 'H'}];
          let opponentHandOfCards = [{rank: '10', suit: 'D'}, {rank: '7', suit: 'D'}];
          let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
          let firstSevenCard = myHandOfCards[1];
          let secondSevenCard = myHandOfCards[2];
          let sampleCardDeck = service.generateCardDeck();


          myHandOfCards = service.discardCard(firstSevenCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          opponentHandOfCards = service.discardCard(opponentHandOfCards[1], samplePile, opponentHandOfCards, myHandOfCards, sampleCardDeck);

          myHandOfCards = service.discardCard(secondSevenCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(1);
          expect(opponentHandOfCards.length).toBe(7);
          expect(samplePile.length).toBe(5);
          expect(sampleCardDeck.length).toBe(26)


        }));


      it('should make me draw 8 cards when opponent has a second 7',
        inject([GameStateService], (service:GameStateService) => {
          let myHandOfCards = [{rank: '9', suit: 'D'}, {rank: '7', suit: 'S'},  {rank: '7', suit: 'H'}];
          let opponentHandOfCards = [{rank: '10', suit: 'D'}, {rank: '7', suit: 'D'}, {rank: '7', suit: 'C'}];
          let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
          let firstSevenCard = myHandOfCards[1];
          let secondSevenCard = myHandOfCards[2];
          let sampleCardDeck = service.generateCardDeck();


          myHandOfCards = service.discardCard(firstSevenCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          opponentHandOfCards = service.discardCard(opponentHandOfCards[1], samplePile, opponentHandOfCards, myHandOfCards, sampleCardDeck);

          myHandOfCards = service.discardCard(secondSevenCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          opponentHandOfCards = service.discardCard(opponentHandOfCards[1], samplePile, opponentHandOfCards, myHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(9);
          expect(opponentHandOfCards.length).toBe(1);
          expect(samplePile.length).toBe(6);
          expect(sampleCardDeck.length).toBe(24)


        }));


      it('should make the opponent draw 2 cards even when opponent also has a 7',
        inject([GameStateService], (service:GameStateService) => {
          let myHandOfCards = [{rank: '9', suit: 'D'}, {rank: '7', suit: 'S'}];
          let opponentHandOfCards = [{rank: '10', suit: 'D'}, {rank: '7', suit: 'D'}];
          let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
          let sampleCard = myHandOfCards[1];
          let sampleCardDeck = service.generateCardDeck();


          myHandOfCards = service.discardCard(sampleCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          service.takeCardsToDraw(opponentHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(1);
          expect(opponentHandOfCards.length).toBe(4);
          expect(samplePile.length).toBe(3);
          expect(sampleCardDeck.length).toBe(30)


        }));


      it('should make me draw 4 cards even if have a second 7',
        inject([GameStateService], (service:GameStateService) => {
          let myHandOfCards = [{rank: '9', suit: 'D'}, {rank: '7', suit: 'S'},  {rank: '7', suit: 'H'}];
          let opponentHandOfCards = [{rank: '10', suit: 'D'}, {rank: '7', suit: 'D'}];
          let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
          let firstSevenCard = myHandOfCards[1];
          let secondSevenCard = myHandOfCards[2];
          let sampleCardDeck = service.generateCardDeck();


          myHandOfCards = service.discardCard(firstSevenCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          opponentHandOfCards = service.discardCard(opponentHandOfCards[1], samplePile, opponentHandOfCards, myHandOfCards, sampleCardDeck);

          // myHandOfCards = service.discardCard(secondSevenCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          service.takeCardsToDraw(myHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(6);
          expect(opponentHandOfCards.length).toBe(1);
          expect(samplePile.length).toBe(4);
          expect(sampleCardDeck.length).toBe(28)


        }));


      it('should make the opponent draw 6 cards even when opponent has a second 7',
        inject([GameStateService], (service:GameStateService) => {
          let myHandOfCards = [{rank: '9', suit: 'D'}, {rank: '7', suit: 'S'},  {rank: '7', suit: 'H'}];
          let opponentHandOfCards = [{rank: '10', suit: 'D'}, {rank: '7', suit: 'D'}, {rank: '7', suit: 'C'}];
          let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
          let firstSevenCard = myHandOfCards[1];
          let secondSevenCard = myHandOfCards[2];
          let sampleCardDeck = service.generateCardDeck();


          myHandOfCards = service.discardCard(firstSevenCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          opponentHandOfCards = service.discardCard(opponentHandOfCards[1], samplePile, opponentHandOfCards, myHandOfCards, sampleCardDeck);

          myHandOfCards = service.discardCard(secondSevenCard, samplePile, myHandOfCards, opponentHandOfCards, sampleCardDeck);

          // opponentHandOfCards = service.discardCard(opponentHandOfCards[1], samplePile, opponentHandOfCards, myHandOfCards, sampleCardDeck);

          service.takeCardsToDraw(opponentHandOfCards, sampleCardDeck);

          expect(myHandOfCards.length).toBe(1);
          expect(opponentHandOfCards.length).toBe(8);
          expect(samplePile.length).toBe(5);
          expect(sampleCardDeck.length).toBe(26)


        }));

    });


  });


  describe('isCardValid method', () => {
    it('should return true if the card to check is the same rank as the top card of the pile',
      inject([GameStateService], (service:GameStateService) => {
        let sampleCard = {rank: '7', suit: 'H'};
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '7', suit: 'C'}]

        let isSameRank = service.isCardValid(sampleCard, samplePile);

        expect(isSameRank).toEqual(true)

      }));

    it('should return false if the card to check is not the same rank as the top card of the pile',
      inject([GameStateService], (service:GameStateService) => {
        let sampleCard = {rank: '8', suit: 'D'};
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '7', suit: 'C'}];

        let isSameRank = service.isCardValid(sampleCard, samplePile);

        expect(isSameRank).toEqual(false)

      }));

    it('should return true if the card to check is the same suit as the top card of the pile',
      inject([GameStateService], (service:GameStateService) => {
        let sampleCard = {rank: '8', suit: 'C'};
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '7', suit: 'C'}];

        let isSameSuit = service.isCardValid(sampleCard, samplePile);

        expect(isSameSuit).toEqual(true)

      }));

    it('should return false if the card to check is not the same suit as the top card of the pile',
      inject([GameStateService], (service:GameStateService) => {
        let sampleCard = {rank: '8', suit: 'C'};
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '7', suit: 'D'}];

        let isSameSuit = service.isCardValid(sampleCard, samplePile);

        expect(isSameSuit).toEqual(false)

      }));

    it('should return true if the card to check is a Jack',
      inject([GameStateService], (service:GameStateService) => {
        let sampleCard = {rank: 'J', suit: 'C'};
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '8', suit: 'D'}];

        let isJack = service.isCardValid(sampleCard, samplePile);

        expect(isJack).toEqual(true)

      }));

    it('should return false if the card to check is a Jack and the top card of the pile is also a Jack',
      inject([GameStateService], (service:GameStateService) => {
        let sampleCard = {rank: 'J', suit: 'C'};
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: 'J', suit: 'D'}];

        let isJackOnJack = service.isCardValid(sampleCard, samplePile);

        expect(isJackOnJack).toEqual(false)

      }));

  });


});
