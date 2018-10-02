import {Component, OnInit} from '@angular/core';
import {AlertService} from "../alert.service";
import {Alert, AlertType} from "../model/alert";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {


  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.getAlert().subscribe(
      (alert: Alert) => {
        this.alerts.push(alert);
      }
    )

  }

  isSuccess(alert: Alert): boolean {
    return alert.type == AlertType.Success;
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

}
