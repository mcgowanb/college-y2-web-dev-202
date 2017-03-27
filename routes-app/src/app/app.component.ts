import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div>
  <nav><a>Naviation</a>
    <ul>
      <li><a [routerLink]="['home']">Home </a></li>
      <li><a [routerLink]="['about']">About</a></li>
      <li><a [routerLink]="['contact']">Contact</a></li>
    </ul>
  </nav>

  <router-outlet></router-outlet>
</div>
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';

  
}
