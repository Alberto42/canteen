import { Injectable } from '@angular/core';
import {Alert, AlertType} from "./model/alert";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private subject = new Subject<Alert>();

  constructor() {
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string) {
    this.alert(new Alert({ message, type: AlertType.Success }));
  }

  error(message: string) {
    this.alert(new Alert({ message, type: AlertType.Error }));
  }

  info(message: string) {
    this.alert(new Alert({ message, type: AlertType.Info }));
  }

  alert(alert: Alert) {
    this.subject.next(alert);
  }
}
