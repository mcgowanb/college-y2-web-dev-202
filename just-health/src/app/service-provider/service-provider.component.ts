import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-provider',
  template: `
<div class="row">
  <div class="col-lg-4 col-lg-offset-8">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="filter" class="col-sm-4 control-label">Sort By</label>
        <div class="col-sm-8 input-group-sm">
          <select class="form-control" id="filter"(change)="filter($event.target.value)">
          <option *ngFor="let option of sortOptions" value={{option.key}}>{{option.value}}</option>
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
  inputs: ['serviceProviderList', 'sortOptions'],
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
