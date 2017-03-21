import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-provider-categories',
  styleUrls: ['./service-provider-categories.component.css'],
  inputs: ['service'],
  template: `
 <div>
  <span *ngFor="let group of service.providerGroups; let i=index"><small>
  <a>{{group.name}}</a><span>{{i < (service.providerGroups.length-1) ? ' | ' : ''}}</span></small>
  </span>
</div>
  `
})
export class ServiceProviderCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
