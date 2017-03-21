import { Component, OnInit } from '@angular/core';
import { ProviderGroup } from '../provider-group';
import { ServiceProvider } from '../service-provider';
import { SortOptions } from '../sort-options';

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
      [serviceProviderList]="serviceProviders" [sortOptions]="sortOptions" (sortList)="orderListChanged($event)">
    </app-service-provider>
    </div>
</div>`,
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  providers: ProviderGroup[];
  checkedProviders: ProviderGroup[];
  serviceProviders: ServiceProvider[];
  absServices: ServiceProvider[];
  filterIdx: String;
  sortOptions: SortOptions[];
  constructor() {
    this.providers = [
      new ProviderGroup("Mental Health", 1),
      new ProviderGroup("Speech Therapy", 2),
      new ProviderGroup("Autism Support", 3),
      new ProviderGroup("Paediatric Services", 4),
      new ProviderGroup("Acute Care Services", 5),
      new ProviderGroup("Something else as well", 6)
    ];

    this.sortOptions = [
      new SortOptions("d", "Best Match"),
      new SortOptions("h", "Rating High-Low"),
      new SortOptions("l", "Rating Low-High"),
    ];

    this.serviceProviders = [
      new ServiceProvider("Dr Nick Riviera",
        "Dr. Nicholas Riviera M.D. is a quack physician who studied at dubious medical schools, although he claims to be \"just as good as Dr. Hibbert M.D.\". He is inventor of Juice Loosener and Sun & Run. Though seemingly killed in the Simpsons Movie by a giant shard of glass, he appears in several episodes after that and it was eventually confirmed by Al Jean that he had not died like many first thought.",
        "./assets/images/doctor-nick.png", 5, [
          new ProviderGroup("Mental Health", 1),
          new ProviderGroup("Speech Therapy", 2),
          new ProviderGroup("Something else as well", 6)]
      ),
      new ServiceProvider("Dr Heartman",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui in libero finibus, non dictum nibh aliquet. Mauris eu dolor sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in lectus erat. Aenean finibus venenatis urna, eget fermentum augue sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "./assets/images/doctor-2.png", 3, [
          new ProviderGroup("Autism Support", 3),
          new ProviderGroup("Acute Care Services", 5),
        ]),
      new ServiceProvider("Dr Whiner",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui in libero finibus, non dictum nibh aliquet. Mauris eu dolor sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in lectus erat. Aenean finibus venenatis urna, eget fermentum augue sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "./assets/images/doctor-3.png", 4, [
          new ProviderGroup("Autism Support", 3),
          new ProviderGroup("Speech Therapy", 2),
        ]),
      new ServiceProvider("Dr B.J. Hardick",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui in libero finibus, non dictum nibh aliquet. Mauris eu dolor sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in lectus erat. Aenean finibus venenatis urna, eget fermentum augue sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "./assets/images/doctor-4.png", 2, [
          new ProviderGroup("Speech Therapy", 2),
          new ProviderGroup("Autism Support", 3),
          new ProviderGroup("Paediatric Services", 4),
          new ProviderGroup("Acute Care Services", 5),
          new ProviderGroup("Something else as well", 6)
        ]),
      new ServiceProvider("Patch Adams",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis dui in libero finibus, non dictum nibh aliquet. Mauris eu dolor sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in lectus erat. Aenean finibus venenatis urna, eget fermentum augue sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        "./assets/images/doctor-1.png", 3, [
          new ProviderGroup("Mental Health", 1),
          new ProviderGroup("Speech Therapy", 2),
          new ProviderGroup("Autism Support", 3),
          new ProviderGroup("Paediatric Services", 4),
          new ProviderGroup("Acute Care Services", 5),
          new ProviderGroup("Something else as well", 6)
        ]),
    ],

      this.filterIdx = "d";
  }

  //create checklist & filtered service provider list
  ngOnInit() {
    this.checkedProviders = Array.from(this.providers);
    this.absServices = Array.from(this.serviceProviders);
  }

  //on check either add or remove item from the array of checked providers
  onBoxChanged(provider: ProviderGroup) {
    if (provider.checked) {
      this.checkedProviders.push(provider);
    }
    else {
      var idx = this.checkedProviders.indexOf(provider);
      if (idx > -1)
        this.checkedProviders.splice(idx, 1);
    }
    this.filterList();
  }

  /**
   * filters the list of services providers based on check boxes. if not already added to the list 
   * they will be added. sanity check to prevent duplicates
   */
  private filterList(): void {
    this.serviceProviders = new Array;
    for (let i of this.checkedProviders) {
      for (let entry of this.absServices) {
        if (
          entry.providerGroups.some(x => x.id == i.id)
          && (this.serviceProviders.indexOf(entry) == -1)
        ) {
          this.serviceProviders.push(entry);
        }
      }
    }
    this.orderList();
  }


  //all providers are checekd
  selectAll(checked: boolean) {
    if (checked) {
      this.serviceProviders = this.absServices;
      this.checkedProviders = this.providers;
      this.orderList();
    }
    else {
      this.serviceProviders = new Array;
      this.checkedProviders = new Array;
    }
  }

  /**
   * Listener for order list box change emitter
   * @param 
   */
  orderListChanged(filter: String): void {
    this.filterIdx = filter;
    this.orderList();
  }

  private orderList(): void {
    switch (this.filterIdx) {
      case "h":
        this.serviceProviders.sort((a: any, b: any) => {
          if (a.rating < b.rating) {
            return 1;
          }
          else return 0;
        });
        break;
      case "l":
        this.serviceProviders.sort((a: any, b: any) => {
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
