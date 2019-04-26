import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote = [
    new Quote(1,'The greatest trick the Devil ever pulled was convincing the world he didn’t exist'),
    new Quote(2,'Kama unapenda watoto wa shule ambia bibi yako avae school uniform'),
  ];


  constructor(){
    this.quotes =["The greatest trick the Devil ever pulled was convincing the world he didn’t exist.","Kama unapenda watoto wa shule ambia bibi yako avae school uniform"];
  }
}
