import { Component, OnInit } from '@angular/core';
import { ClassMate } from '../class-mate';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-class-mates',
  template: `
<form class="ui large form segment">
    <h1 class="ui header" *ngIf="loading === false">{{moduleTitle}}: Add a Class Mate</h1>
    <p *ngIf="loading">Reading title from database, please wait...........</p>
    
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
    <button class="ui positive button" (click)="addClassMate(fName, lName, email, phone)">Add Class Mate</button>
</form>
<app-class-mates [matesList]="mates"></app-class-mates>
  `,
  styleUrls: ['./my-class-mates.component.css'],
  providers: [DataService]
})
export class MyClassMatesComponent implements OnInit {
  mates: ClassMate[];
  moduleTitle = {};
  private loading: boolean;
  constructor(private dataService: DataService) {
    this.loading = true;
    this.mates = [
      new ClassMate("Jack", "Hackett", "frJack@craggyIsland.ie", "123456"),
      new ClassMate("Ted", "Crilly", "frTed@craggyIsland.ie", "654321"),
    ];
    this.getModuleTitle();
  }

  ngOnInit() {
  }

  addClassMate(fName: HTMLInputElement, lName: HTMLInputElement, email: HTMLInputElement, phone: HTMLInputElement): boolean {
    this.mates.push(new ClassMate(fName.value, lName.value, email.value, phone.value));
    fName.value = lName.value = email.value = phone.value = "";
    return false;
  }

  getModuleTitle() {
    this.dataService.getModuleTitle().subscribe((data) => {
      this.moduleTitle = data;
      this.loading = false;
    })
  }

}
