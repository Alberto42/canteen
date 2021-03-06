import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes() {
      return this.http.get('/api/dishes');
  }

  getDish(id : string) {
    return this.http.get('/api/dishes/' + id);
  }
}
