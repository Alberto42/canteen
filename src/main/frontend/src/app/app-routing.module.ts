import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {OrderDishComponent} from "./order-dish/order-dish.component";
import {AppComponent} from "./app.component";
import {MenuComponent} from "./menu/menu.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'order/:id', component: OrderDishComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
