import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'hand-of-cards',
  templateUrl: 'hand-of-cards.component.html',
  styleUrls: ['hand-of-cards.component.css']
})
export class HandOfCardsComponent implements OnInit {

  @Input() playerCards= [];
  @Input() cardsVisible= false ;
  @Input() myTurn;
  @Output() discard = new EventEmitter();
  @Output() computerDiscard = new EventEmitter();
  @Output() computerDraw = new EventEmitter();


  constructor() {}

  ngOnInit() {
  }

  sendDiscardEvent(card){
    if(this.myTurn){
      this.discard.emit(card);
    }
  }

  sendComputerDiscard(){
    this.computerDiscard.emit('');
  }

  sendComputerDraw(){
    this.computerDraw.emit('');
  }

  getCurrentBackgroundColor(){
    if (this.myTurn){
      return 'red'
    } else {
      return 'white'
    }
  }

}
