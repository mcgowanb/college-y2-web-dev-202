import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  inputs: ['productList'],  
  template: `
 <div class="ui items">
  <app-product-row 
    *ngFor="let myProduct of productList" 
      [product]="myProduct" 
      (click)='clicked(myProduct)' 
      [class.selected]="isSelected(myProduct)">
  </app-product-row>
</div>
  `,
  styleUrls: ['./products-list.component.css'],
  outputs: ['onProductSelected']
})
export class ProductsListComponent implements OnInit {
  /**
   * @Import productList - Input of Product Array passed to this component
   */
  productList: Product[];

  /**
   * @Output the click event passes the product output to the caller
   */
  onProductSelected: EventEmitter<Product>;
  private cProduct: Product;
  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.cProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.cProduct) {
      return false;
    }
    return product.sku === this.cProduct.sku;
  }

  ngOnInit() {
  }

}
