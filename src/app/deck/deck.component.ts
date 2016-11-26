import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deck',
  templateUrl: 'deck.component.html',
  styleUrls: ['deck.component.css']
})
export class DeckComponent implements OnInit {

  @Input() cards=[];

  constructor() {}

  ngOnInit() {
  }

}
