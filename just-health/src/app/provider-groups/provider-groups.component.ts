import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProviderGroup } from '../provider-group';

@Component({
  selector: 'app-provider-groups',
  templateUrl: './provider-groups.component.html',
  styleUrls: ['./provider-groups.component.css'],
  
  inputs: ['providerList'],
  outputs: ['onBoxChanged', 'selectAll']
})
export class ProviderGroupsComponent implements OnInit {
  providerList: ProviderGroup[];

  onBoxChanged: EventEmitter<ProviderGroup>;
  selectAll: EventEmitter<boolean>;
  private cGroup: ProviderGroup;

  constructor() {
    this.onBoxChanged = new EventEmitter();
    this.selectAll = new EventEmitter();
  }

  clicked(pGroup: ProviderGroup): void {
    this.cGroup = pGroup;
    this.onBoxChanged.emit(pGroup);
  }

  checkAll(ev): void {
    this.providerList.forEach(x => x.checked = ev.target.checked)
    this.selectAll.emit(ev.target.checked);
  }

  ngOnInit() {
  }
 
}
