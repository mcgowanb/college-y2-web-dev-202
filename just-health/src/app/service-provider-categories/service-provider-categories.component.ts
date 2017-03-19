import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-provider-categories',
  // templateUrl: './service-provider-categories.component.html',
  styleUrls: ['./service-provider-categories.component.css'],
  inputs: ['service'],
  template: `
 <div>
  <span *ngFor="let group of service.providerGroups; let i=index">
  <a>{{group.name}}</a><span>{{i < (service.providerGroups.length-1) ? ' | ' : ''}}</span>
  </span>
</div>
  `
})
export class ServiceProviderCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
