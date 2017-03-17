import { Component, OnInit, Input } from '@angular/core';
import { ServiceProvider } from '../service-provider';

@Component({
  selector: 'app-service-provider-row',
  // templateUrl: './service-provider-row.component.html',
  template: `
  <div class="row service-provider">
  <div class="col-lg-3">
     <a class="thumbnail">
      <img src="{{service.imageUrl}}" alt="{{service.name}}" title="{{service.name}}">
    </a>
  </div>
  <div class="col-lg-6">
    <h3>{{service.name}}</h3>
    <p>{{service.details}}</p>
  </div>
  <div class="col-lg-3">
    <span *ngFor="let i of arr(fullStars).fill(1)" class="glyphicon glyphicon-star" aria-hidden="true"></span>
    <span *ngFor="let i of arr(emptyStars).fill(1)" class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
    
  </div>
</div>
  `,
  styleUrls: ['./service-provider-row.component.css'],
  // inputs: ['service']
})
export class ServiceProviderRowComponent implements OnInit {
  @Input() service: ServiceProvider;
  sp: ServiceProvider;
  arr = Array;
  fullStars: number;
  emptyStars: number;
  
  constructor() {
  }

  ngOnInit() {
    this.fullStars = this.service.rating;
    this.emptyStars = this.service.maxRating - this.service.rating;
  }

}
