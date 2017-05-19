import { Component, OnInit } from '@angular/core';
import { ClassMate } from '../class-mate';

@Component({
  selector: 'app-my-class-mates',
  template: `
    <form class="ui large form segment">
  <div class="field">
    <label>First Name</label>
    <input type="text" name="first-name" placeholder="First Name" #fName>
  </div>
  <div class="field">
    <label>Last Name</label>
    <input type="text" name="last-name" placeholder="Last Name" #lName>
  </div>
  <div class="field">
    <label>Email</label>
    <input type="text" name="email-name" placeholder="Email" #email>
  </div>
  <div class="field">
    <label>Phone</label>
    <input type="text" name="phone-name" placeholder="Phone" #phone>
  </div>
  <button class="ui positive button" (click)="addClassMate(fName, lName, email, phone)">
  Save
</button>
</form>
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

  addClassMate(fName: HTMLInputElement, lName: HTMLInputElement, email: HTMLInputElement, phone: HTMLInputElement): boolean {
    console.log(`adding new dude ${fName.value} and lName  | ${email.value} | ${phone.value}`);
    this.mates.push(new ClassMate(fName.value, lName.value, email.value, phone.value));
    fName.value = lName.value = email.value = phone.value = "";
    
    return false;
  }

}
