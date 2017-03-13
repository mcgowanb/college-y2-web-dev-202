import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { ServiceProviderRowComponent } from './service-provider-row/service-provider-row.component';
import { ServiceProviderImageComponent } from './service-provider-image/service-provider-image.component';
import { ServiceProviderDetailsComponent } from './service-provider-details/service-provider-details.component';
import { ServiceProviderRatingComponent } from './service-provider-rating/service-provider-rating.component';
import { ServiceProviderGroupsComponent } from './service-provider-groups/service-provider-groups.component';
import { ProviderGroupsComponent } from './provider-groups/provider-groups.component';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProviderRowComponent } from './provider-row/provider-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceProviderComponent,
    ServiceProviderRowComponent,
    ServiceProviderImageComponent,
    ServiceProviderDetailsComponent,
    ServiceProviderRatingComponent,
    ServiceProviderGroupsComponent,
    ProviderGroupsComponent,
    MenuComponent,
    MainPageComponent,
    ProviderRowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
