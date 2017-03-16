import { Component, OnInit } from '@angular/core';
import {ProviderGroup} from '../provider-group';

@Component({
  selector: 'app-main-page',
  template: `
    <div class="row">
    <div class="col-lg-3">
        <app-provider-groups 
            [providerList]="providers" 
            (onBoxChanged)="onBoxChanged($event)" 
            (selectAll)="selectAll($event)">
        </app-provider-groups>
    </div>
    <div class="col-lg-9">
    <app-service-provider></app-service-provider>
    </div>
</div>`,
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
providers : ProviderGroup[];
 constructor() {
    this.providers = [
      new ProviderGroup("Mental Health", 1),
      new ProviderGroup("Speech Therapy", 2),
      new ProviderGroup("Autism Support", 3),
      new ProviderGroup("Paediatric Services", 4),
      new ProviderGroup("Acute Care Services", 5),
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
