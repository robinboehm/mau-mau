import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GameStateService } from './game-state.service';

describe('GameState Service', () => {
  beforeEachProviders(() => [GameStateService]);


  describe('inital state', () => {
    it('should initialize an empty pile',
      inject([GameStateService], (service: GameStateService) => {
        expect(service.pile).toEqual([]);
      }));

    it('should initialize cards to draw with 0',
      inject([GameStateService], (service: GameStateService) => {
        expect(service.cardsToDraw).toEqual(0);
      }));

    it('should start with me as first player',
      inject([GameStateService], (service: GameStateService) => {
        expect(service.myTurn).toEqual(true);
      }));
  });


  describe('generateCardDeck', () => {
    it('should generate 32 cards',
      inject([GameStateService], (service: GameStateService) => {
        let theNewCardDeck = service.generateCardDeck();
        expect(theNewCardDeck.length).toEqual(32);
      }));

    it('should generate the correct cards',
      inject([GameStateService], (service: GameStateService) => {
        let theNewCardDeck = service.generateCardDeck();
        expect(theNewCardDeck).toContain({rank:'7', suit:'C'});
        expect(theNewCardDeck).toContain({rank:'8', suit:'C'});
        expect(theNewCardDeck).toContain({rank:'9', suit:'C'});
        expect(theNewCardDeck).toContain({rank:'10', suit:'C'});
        expect(theNewCardDeck).toContain({rank:'J', suit:'C'});
        expect(theNewCardDeck).toContain({rank:'Q', suit:'C'});
        expect(theNewCardDeck).toContain({rank:'K', suit:'C'});
        expect(theNewCardDeck).toContain({rank:'A', suit:'C'});

        expect(theNewCardDeck).toContain({rank:'7', suit:'H'});
        expect(theNewCardDeck).toContain({rank:'8', suit:'H'});
        expect(theNewCardDeck).toContain({rank:'9', suit:'H'});
        expect(theNewCardDeck).toContain({rank:'10', suit:'H'});
        expect(theNewCardDeck).toContain({rank:'J', suit:'H'});
        expect(theNewCardDeck).toContain({rank:'Q', suit:'H'});
        expect(theNewCardDeck).toContain({rank:'K', suit:'H'});
        expect(theNewCardDeck).toContain({rank:'A', suit:'H'});

        expect(theNewCardDeck).toContain({rank:'7', suit:'S'});
        expect(theNewCardDeck).toContain({rank:'8', suit:'S'});
        expect(theNewCardDeck).toContain({rank:'9', suit:'S'});
        expect(theNewCardDeck).toContain({rank:'10', suit:'S'});
        expect(theNewCardDeck).toContain({rank:'J', suit:'S'});
        expect(theNewCardDeck).toContain({rank:'Q', suit:'S'});
        expect(theNewCardDeck).toContain({rank:'K', suit:'S'});
        expect(theNewCardDeck).toContain({rank:'A', suit:'S'});

        expect(theNewCardDeck).toContain({rank:'7', suit:'D'});
        expect(theNewCardDeck).toContain({rank:'8', suit:'D'});
        expect(theNewCardDeck).toContain({rank:'9', suit:'D'});
        expect(theNewCardDeck).toContain({rank:'10', suit:'D'});
        expect(theNewCardDeck).toContain({rank:'J', suit:'D'});
        expect(theNewCardDeck).toContain({rank:'Q', suit:'D'});
        expect(theNewCardDeck).toContain({rank:'K', suit:'D'});
        expect(theNewCardDeck).toContain({rank:'A', suit:'D'});



      }));

  });




});
