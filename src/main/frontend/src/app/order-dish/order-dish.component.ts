import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {DishService} from "../dish.service";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.css']
})
export class OrderDishComponent implements OnInit {

  dish : any;
  seats : number[] = [1,2,3,4,5,6,7,8,9,10];

  seat : number;
  constructor(private dishService : DishService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishService.getDish(id).subscribe(
      (dish : any) => {
        this.dish = dish
    },
    (error) => console.log(error)
    )
  }

  order() {
    console.log(this.seat);
  }

}
