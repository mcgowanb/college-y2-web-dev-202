import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  //templateUrl: './hello-world.component.html',
  template: `
  <h1> Hello world Title</h1>
  `,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
