import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class AppComponent {
  quote = [
    new Quote(1,'The greatest trick the Devil ever pulled was convincing the world he didn’t exist'),
    new Quote(2,'Kama unapenda watoto wa shule ambia bibi yako avae school uniform'),
  ];


  constructor(){
    this.quote =["The greatest trick the Devil ever pulled was convincing the world he didn’t exist.","Kama unapenda watoto wa shule ambia bibi yako avae school uniform"];
  }
}
