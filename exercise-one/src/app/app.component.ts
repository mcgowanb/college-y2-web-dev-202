import { Component } from '@angular/core';
import { Detail } from './detail/detail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  details: Detail[]

  constructor(){
    this.details = [
      new Detail("Brian", "address!", "S1234", "321", "something this lad something something something"),
      new Detail("Steve", "address!", "S1234", "321", "something else here this lad"),
      new Detail("Joe Bloggs", "Main Street Kildare", "S1234", "321", "yet more information about something")            
    ]
  }
}
