import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-mates',
  template: `
   <app-class-mate *ngFor="let m of matesList" [mate]="m">
  </app-class-mate>
  `,
  styleUrls: ['./class-mates.component.css'],
  inputs: ['matesList'],
})
export class ClassMatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
