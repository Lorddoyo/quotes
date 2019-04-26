import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote: string[];


  constructor(){
    this.quotes =["The greatest trick the Devil ever pulled was convincing the world he didn’t exist.","Kama unapenda watoto wa shule ambia bibi yako avae school uniform"];
  }
}
