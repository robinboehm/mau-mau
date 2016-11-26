import { Component, OnInit, Input } from '@angular/core';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'pile',
  templateUrl: 'pile.component.html',
  styleUrls: ['pile.component.css']
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
