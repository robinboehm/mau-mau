import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CardComponent} from "../card/card.component";

@Component({
  moduleId: module.id,
  selector: 'hand-of-cards',
  templateUrl: 'hand-of-cards.component.html',
  styleUrls: ['hand-of-cards.component.css'],
  directives: [CardComponent]
})
export class HandOfCardsComponent implements OnInit {

  @Input() playerCards= [];
  @Input() cardsVisible= false ;
  @Output() discard = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  sendDiscardEvent(card){
    this.discard.emit(card);
  }

}
