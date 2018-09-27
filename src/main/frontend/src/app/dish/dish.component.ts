import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  @Input() dish : any;
  @Input() orderButton : boolean;
  constructor() { }

  ngOnInit() {

  }

}
