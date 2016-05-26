import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
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
