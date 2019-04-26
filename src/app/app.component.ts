import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '<h1>My Quotes</h1>'
                <p>This is a simple website for {{quote}}</p>,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
}
