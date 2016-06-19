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

        sampleHandOfCards = service.discardCard(sampleCard,samplePile,sampleHandOfCards)

        expect(sampleHandOfCards).not.toContain({rank: '8', suit: 'S'})
        expect(samplePile).toContain({rank: '8', suit: 'S'})

      }));

    it('should check if discarded card is valid, if not do not discard',
      inject([GameStateService], (service:GameStateService) => {
      let sampleHandOfCards = [{rank: '9', suit: 'D'}, {rank: '8', suit: 'S'}];
      let samplePile = [{rank: 'A', suit: 'H'}, {rank: '7', suit: 'D'}];
      let sampleCard = sampleHandOfCards[1];

      sampleHandOfCards = service.discardCard(sampleCard,samplePile,sampleHandOfCards)

      expect(sampleHandOfCards).toContain({rank: '8', suit: 'S'});
      expect(samplePile).not.toContain({rank: '8', suit: 'S'});

    }));


    it('should change the current player if a card is discarded',
      inject([GameStateService], (service:GameStateService) => {
        let sampleHandOfCards = [{rank: '9', suit: 'D'}, {rank: '9', suit: 'S'}];
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'D'}];
        let sampleCard = sampleHandOfCards[1];


        let myTurnBefore = service.myTurn;

        service.discardCard(sampleCard,samplePile,sampleHandOfCards)

        expect(service.myTurn).not.toBe(myTurnBefore)


      }));

    it('should not change the current player if an 8-card is discarded',
      inject([GameStateService], (service:GameStateService) => {
        let sampleHandOfCards = [{rank: '9', suit: 'D'}, {rank: '8', suit: 'S'}];
        let samplePile = [{rank: 'A', suit: 'H'}, {rank: '9', suit: 'S'}];
        let sampleCard = sampleHandOfCards[1];


        let myTurnBefore = service.myTurn;

        service.discardCard(sampleCard,samplePile,sampleHandOfCards)

        expect(service.myTurn).toBe(myTurnBefore)


      }));

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
