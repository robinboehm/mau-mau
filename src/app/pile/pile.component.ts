import { Component, OnInit, Input } from '@angular/core';
import {CardComponent} from "../card/card.component";

@Component({
  moduleId: module.id,
  selector: 'pile',
  templateUrl: 'pile.component.html',
  styleUrls: ['pile.component.css'],
  directives: [CardComponent]
})
export class PileComponent implements OnInit {

  @Input() cards=[];

  constructor() {}

  ngOnInit() {
  }

  getTopCard(){
    return this.cards[this.cards.length-1]

  }
}
