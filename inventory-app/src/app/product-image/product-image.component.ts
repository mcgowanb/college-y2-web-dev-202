import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-image',
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `,
  styleUrls: ['./product-image.component.css'],
  inputs: ['product'],
  host: {class: 'ui small image'}
})
export class ProductImageComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
