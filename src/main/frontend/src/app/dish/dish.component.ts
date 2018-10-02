import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../model/dish";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  @Input() dish: Dish;
  @Input() orderButton: boolean;

  constructor() {
  }

  ngOnInit() {

  }

}
