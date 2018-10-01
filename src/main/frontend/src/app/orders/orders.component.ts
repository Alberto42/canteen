import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService : OrderService) { }

  orders : any[];
  ngOnInit() {
    this.orderService.getOrders().subscribe(
      (orders : any[]) => {
        this.orders = orders;
      }
    )
  }

  getDate(date : string) : string{
    let regex : string = "^\\d+-\\d+-\\d+T";
    let day_part : string = date.match(regex)[0];
    let day : string = day_part.substring(0,day_part.length-1);
    return day
  }

  getMinutes(date : string) : string {
    let regex : string = "T\\d+:\\d+";
    let minutes_part : string = date.match(regex)[0];
    let minutes : string = minutes_part.substring(1,minutes_part.length);
    return minutes;
  }

}
