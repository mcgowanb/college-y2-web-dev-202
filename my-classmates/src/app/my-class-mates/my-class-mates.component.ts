import { Component, OnInit } from '@angular/core';
import { ClassMate } from '../class-mate';

@Component({
  selector: 'app-my-class-mates',
  template: `
    <app-class-mates [matesList]="mates"></app-class-mates>
  `,
  styleUrls: ['./my-class-mates.component.css']
})
export class MyClassMatesComponent implements OnInit {
  mates: ClassMate[];
  constructor() {
    this.mates = [
      new ClassMate("Jack", "Hackett", "frJack@craggyIsland.ie", "123456"),
      new ClassMate("Ted", "Crilly", "frTed@craggyIsland.ie", "654321"),
    ];
  }

  ngOnInit() {
  }

}
