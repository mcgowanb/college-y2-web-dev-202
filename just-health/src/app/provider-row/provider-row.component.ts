import { Component, OnInit } from '@angular/core';
import { ProviderGroup } from '../provider-group';

@Component({
  selector: 'app-provider-row',
  inputs: ['provider'],
  template: `
      <div class="checkbox">
    <label><input type="checkbox" name="{{provider.name}}" id={{provider.name}} [(ngModel)]="provider.checked">{{provider.name}}</label>
  </div>
 `,
  styleUrls: ['./provider-row.component.css']

})
export class ProviderRowComponent implements OnInit {
  provider: ProviderGroup;
  constructor() { }

  ngOnInit() {
  }

}
