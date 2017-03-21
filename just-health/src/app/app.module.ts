import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { ServiceProviderRowComponent } from './service-provider-row/service-provider-row.component';
import { ProviderGroupsComponent } from './provider-groups/provider-groups.component';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProviderRowComponent } from './provider-row/provider-row.component';
import { HelpComponent } from './help/help.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ServiceProviderCategoriesComponent } from './service-provider-categories/service-provider-categories.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'help', component: HelpComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    ServiceProviderComponent,
    ServiceProviderRowComponent,
    ProviderGroupsComponent,
    MenuComponent,
    MainPageComponent,
    ProviderRowComponent,
    HelpComponent,
    ServiceProviderCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})


export class AppModule {

}
