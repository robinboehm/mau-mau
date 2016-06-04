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
