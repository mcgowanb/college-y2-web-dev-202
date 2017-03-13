import { Component, OnInit } from '@angular/core';
import {ProviderGroup} from '../provider-group';

@Component({
  selector: 'app-main-page',
  template: `
  <div class="ui stackable doubling grid">
    <div class="sixteen wide column">
      <app-menu></app-menu>
    </div>
    <div class="four wide column">
      <app-provider-groups [providerList]="providers"
    (onBoxChanged)="onBoxChanged($event)"></app-provider-groups>
    </div>
    <div class="twelve wide column">
      <app-service-provider></app-service-provider>
    </div>
  </div>`,
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
providers : ProviderGroup[];
 constructor() {
    this.providers = [
      new ProviderGroup("Mental Health afsfs fs"),
      new ProviderGroup("Speech Therap sdad"),
      new ProviderGroup("Autism Support"),
      new ProviderGroup("Paediatric Services"),
      new ProviderGroup("Something Else"),
      new ProviderGroup("Something else as well"),
    ]
   }

  ngOnInit() {
  }

  onBoxChanged(provider: ProviderGroup){
    console.log("Box was changed: ", provider);
  }

}
