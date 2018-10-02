import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {DishService} from "../dish.service";
import {FormControl, FormGroup} from "@angular/forms";
import {OrderService} from "../order.service";
import {Dish} from "../model/dish";
import {Location} from '@angular/common';
import {AlertService} from "../alert.service";

@Component({
  selector: 'app-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.css']
})
export class OrderDishComponent implements OnInit {

  dish: Dish;
  seats: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  seat: number;

  constructor(private dishService: DishService,
              private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService,
              private location: Location,
              private alertService: AlertService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishService.getDish(id).subscribe(
      (dish: any) => {
        this.dish = dish
      },
      (error) => console.log(error)
    )
  }

  order() {
    this.orderService.order(this.dish.id, this.seat);
    this.router.navigate(['/main']);
    this.alertService.success(`You have sucessfully ordered ${this.dish.name}`);
  }

  goBack() {
    this.location.back();
  }
}
