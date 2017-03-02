import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-inventory',
  template: `
  <div class="app-inventory">
    <app-products-list 
    [productList]="products"
    (onProductSelected)="productWasSelected($event)">
    </app-products-list>
  </div>
  `,
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  products: Product[];
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'A nice black hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )
    ];
  }

productWasSelected(product: Product): void {
  console.log("Product was selected ", product)
}
  ngOnInit() {
  }

}
