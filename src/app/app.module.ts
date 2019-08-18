import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ItemComponent } from './item/item.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AppRoutingModule, routingComponent} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
