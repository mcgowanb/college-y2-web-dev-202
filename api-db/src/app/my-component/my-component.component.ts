import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [DataService]
})
export class MyComponentComponent implements OnInit {

  constructor(private dataService: DataService) {
    this.getProgramTitle();
  }

  ngOnInit() {
  }

  programTitle = {};

  getProgramTitle() {
    this.dataService.getProgrammeTitle().subscribe(data => this.programTitle = data);
  }
}
