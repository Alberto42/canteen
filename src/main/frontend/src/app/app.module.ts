import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { OrderDishComponent } from './order-dish/order-dish.component';
import {RouterModule} from "@angular/router";
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderDishComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
