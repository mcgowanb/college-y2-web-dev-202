import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProviderGroup } from '../provider-group';

@Component({
  selector: 'app-provider-groups',
  //templateUrl: './provider-groups.component.html',
  template: `
  <h2 class="ui header">Service Types</h2>
 <form class="ui form items">
 <div class="ui fluid checkbox">
    <input type="checkbox" name="select-all" id="all" (change)="checkAll($event)">
    <label for="all">Select All</label>
  </div>
  <app-provider-row 
    *ngFor="let p of providerList" 
    (change)='clicked(p)'
     [provider]="p">
  </app-provider-row>
</form>
  `,
  styleUrls: ['./provider-groups.component.css'],
  inputs: ['providerList'],
  outputs: ['onBoxChanged']
})
export class ProviderGroupsComponent implements OnInit {
  providerList: ProviderGroup[];

  onBoxChanged: EventEmitter<ProviderGroup>;
  private cGroup: ProviderGroup;
  constructor() { 
    this.onBoxChanged = new EventEmitter();
  }

  clicked(pGroup: ProviderGroup): void {
    this.cGroup = pGroup;
    this.onBoxChanged.emit(pGroup);
  }

  checkAll(ev): void{ 
     this.providerList.forEach(x => x.checked = ev.target.checked)
  }

  ngOnInit() {
  }

}
