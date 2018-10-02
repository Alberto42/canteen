import {Component, OnInit} from '@angular/core';
import {DishService} from "../dish.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dishService: DishService) {
  }

  dishes: any[] = []

  ngOnInit() {
    this.dishService.getDishes().subscribe(
      (dishes: any[]) => {
        this.dishes = dishes
      }
    )
  }

}
