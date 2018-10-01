import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { OrderDishComponent } from './order-dish/order-dish.component';
import {RouterModule} from "@angular/router";
import { DishComponent } from './dish/dish.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrdersComponent } from './orders/orders.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderDishComponent,
    DishComponent,
    OrdersComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
