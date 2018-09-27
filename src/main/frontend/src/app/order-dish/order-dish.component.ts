import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {DishService} from "../dish.service";
@Component({
  selector: 'app-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.css']
})
export class OrderDishComponent implements OnInit {

  dish : any;

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

}
