import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-department',
  inputs: ['product'],
  template:`
  <div class="product-department">
  <span *ngFor="let name of product.department; let i=index">
    <a href="#"> {{name}} </a>
    <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
  </span>
</div>
  `,
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {
product;Product;
  constructor() { }

  ngOnInit() {
  }

}
