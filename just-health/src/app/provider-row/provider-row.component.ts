import { Component, OnInit } from '@angular/core';
import { ProviderGroup } from '../provider-group';

@Component({
  selector: 'app-provider-row',
  inputs: ['provider'],
  template: `
  <div class="ui fluid checkbox">
    <input type="checkbox" name="example" id={{provider.name}} [(ngModel)]="provider.checked">
    <label for={{provider.name}}>{{provider.name}}</label>
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
