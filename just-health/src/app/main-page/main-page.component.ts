import { Component, OnInit } from '@angular/core';
import { ProviderGroup } from '../provider-group';
import { ServiceProvider } from '../service-provider';

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
    <app-service-provider
      [serviceProviderList]="serviceProviders" (sortList)="filterList($event)">
    </app-service-provider>
    </div>
</div>`,
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  providers: ProviderGroup[];
  serviceProviders: ServiceProvider[];
  constructor() {
    this.providers = [
      new ProviderGroup("Mental Health", 1),
      new ProviderGroup("Speech Therapy", 2),
      new ProviderGroup("Autism Support", 3),
      new ProviderGroup("Paediatric Services", 4),
      new ProviderGroup("Acute Care Services", 5),
      new ProviderGroup("Something else as well", 6),
    ];

    this.serviceProviders = [
      new ServiceProvider("Dr Zeuss",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui in libero finibus, non dictum nibh aliquet. Mauris eu dolor sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in lectus erat. Aenean finibus venenatis urna, eget fermentum augue sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "./assets/images/doctor-1.png", 5),
      new ServiceProvider("Dr Heartman",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui in libero finibus, non dictum nibh aliquet. Mauris eu dolor sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in lectus erat. Aenean finibus venenatis urna, eget fermentum augue sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "./assets/images/doctor-2.png", 3),
      new ServiceProvider("Dr Whiner",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui in libero finibus, non dictum nibh aliquet. Mauris eu dolor sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in lectus erat. Aenean finibus venenatis urna, eget fermentum augue sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "./assets/images/doctor-3.png", 4),
      new ServiceProvider("Dr B.J. Hardick",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui in libero finibus, non dictum nibh aliquet. Mauris eu dolor sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in lectus erat. Aenean finibus venenatis urna, eget fermentum augue sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "./assets/images/doctor-4.png", 2),
      new ServiceProvider("Patch Adams",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui in libero finibus, non dictum nibh aliquet. Mauris eu dolor sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in lectus erat. Aenean finibus venenatis urna, eget fermentum augue sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "./assets/images/doctor-1.png", 3),
    ]
  }

  ngOnInit() {
  }

  onBoxChanged(provider: ProviderGroup) {
    console.log("Box was changed: ", provider);
  }

  selectAll(providers: ProviderGroup[]) {
    console.log("all was selected", providers);
  }

  filterList(filter: String): void {
    switch (filter) {
      case "h":
        this.serviceProviders = this.serviceProviders.sort((a: any, b: any) => {
          if (a.rating < b.rating) {
            return 1;
          }
          else return 0;
        });
        break;
      case "l":
        this.serviceProviders = this.serviceProviders.sort((a: any, b: any) => {
          if (a.rating > b.rating) {
            return 1;
          }
          else return 0;
        });
        break;
      case "d":
        break;
    }
  }

}
