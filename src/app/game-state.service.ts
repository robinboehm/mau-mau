import { Injectable } from '@angular/core';

@Injectable()
export class GameStateService {

  pile;
  cardsToDraw;
  myTurn;

  constructor() {
    this.pile = [];
    this.cardsToDraw = 0;
    this.myTurn=true;
  }

}
