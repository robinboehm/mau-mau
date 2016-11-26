import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {

  @Input() private suit: string;
  @Input() private rank: string;

  constructor() {}

  ngOnInit() {
  }

  getImageUrl(){
    return `assets/cards-svg/${this.rank}${this.suit}.svg`;
  }

}
