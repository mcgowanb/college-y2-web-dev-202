import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-provider',
  // templateUrl: './service-provider.component.html',
  template: `
<div class="row">
  <div class="col-lg-4 col-lg-offset-8">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="filter" class="col-sm-4 control-label">Sort By</label>
        <div class="col-sm-8 input-group-sm">
          <select class="form-control" id="filter" (change)="filter($event.target.value)">
          <option value="d">Best Match</option>
          <option value="h">Rating High-Low</option>
          <option value="l">Rating Low-High</option>
        </select>
        </div>
      </div>
    </form>
  </div>
</div>
<div class="row">
  <app-service-provider-row *ngFor="let s of serviceProviderList" [service]="s">
  </app-service-provider-row>
</div>
  `,
  styleUrls: ['./service-provider.component.css'],
  inputs: ['serviceProviderList'],
  outputs: ['sortList']
})
export class ServiceProviderComponent implements OnInit {

  sortList: EventEmitter<any>;

  constructor() {
    this.sortList = new EventEmitter();
  }

  ngOnInit() {
  }

  filter(ev): void {
    this.sortList.emit(ev);
  }

}
