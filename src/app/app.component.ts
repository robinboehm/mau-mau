import { Component } from '@angular/core';
import {GameStateService} from "./game-state.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private game: GameStateService) {

  }
}
