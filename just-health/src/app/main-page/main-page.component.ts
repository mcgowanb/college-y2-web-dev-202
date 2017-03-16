import { Component, OnInit } from '@angular/core';
import {ProviderGroup} from '../provider-group';

@Component({
  selector: 'app-main-page',
  template: `
  
    <div class="four wide column">
        <app-provider-groups 
            [providerList]="providers" 
            (onBoxChanged)="onBoxChanged($event)" 
            (selectAll)="selectAll($event)"
        ></app-provider-groups>
    </div>
    <div class="twelve wide column">
        <app-service-provider></app-service-provider>
    </div>`,
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
providers : ProviderGroup[];
 constructor() {
    this.providers = [
      new ProviderGroup("Mental Health afsfs fs", 1),
      new ProviderGroup("Speech Therap sdad", 2),
      new ProviderGroup("Autism Support", 3),
      new ProviderGroup("Paediatric Services", 4),
      new ProviderGroup("Something Else", 5),
      new ProviderGroup("Something else as well", 6),
    ]
   }

  ngOnInit() {
  }

  onBoxChanged(provider: ProviderGroup){
    console.log("Box was changed: ", provider);
  }

  selectAll(providers: ProviderGroup[]){
      console.log("all was selected", providers);
  }

}
