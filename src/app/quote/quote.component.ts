import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
          new Quote(1,'The greatest trick the Devil ever pulled was convincing the world he didn’t exist','By C.S.Lewis')
          new Quote(2,'Kama unapenda watoto wa shule ambia bibi yako avae school uniform','By Zenas Muli')
  ]
  completeQuote(isComplete,index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }
  toogleDetails(index){
    this.quotes[index].showDescription =!this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
