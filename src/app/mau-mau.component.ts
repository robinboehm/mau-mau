import { Component } from '@angular/core';
import {CardComponent} from "./card/card.component";
import {HandOfCardsComponent} from "./hand-of-cards/hand-of-cards.component";
import {DeckComponent} from "./deck/deck.component";
import {PileComponent} from "./pile/pile.component";

import {GameStateService} from "./game-state.service";


@Component({
  moduleId: module.id,
  selector: 'mau-mau-app',
  templateUrl: 'mau-mau.component.html',
  styleUrls: ['mau-mau.component.css'],
  providers: [GameStateService],
  directives: [CardComponent, HandOfCardsComponent, DeckComponent, PileComponent]
})
export class MauMauAppComponent {

   constructor(private game:GameStateService) {

   }




}


