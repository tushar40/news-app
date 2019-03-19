import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs=['Home','Business','Entertainment','Health','Science','Sports','Technology']
  title = 'NewsApp';
}
