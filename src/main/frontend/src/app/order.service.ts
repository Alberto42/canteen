import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestOptions} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  order(dishId : string, seat : number) {
    return this.http.post(`/api/order?dishId=${dishId}&seat=${seat}`,null).subscribe(
      (error) => console.log(error)
    );
  }

  getOrders() {
    return this.http.get('/api/order');
  }
}
