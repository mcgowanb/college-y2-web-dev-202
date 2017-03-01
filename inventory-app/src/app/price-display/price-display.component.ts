import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-display',
  template: `
  <div class="price-display">\€{{price}}</div>`,
  styleUrls: ['./price-display.component.css'],
  inputs: ['price']
})
export class PriceDisplayComponent implements OnInit {
  price: number;
  constructor() { }

  ngOnInit() {
  }

}
