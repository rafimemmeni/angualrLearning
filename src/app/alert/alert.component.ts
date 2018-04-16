import { Component, OnInit } from '@angular/core';
import { ServicetestService } from '../service-test/servicetest.service';
import { AlertType, Alert } from '../clasess/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private servicetestService : ServicetestService) { }
alert : Alert;
  ngOnInit() {
    debugger;
    this.servicetestService.subject.subscribe(
  		(data) => {
        debugger;
        this.alert = new Alert()
        this.alert.message = data.message;
        this.alert.type = data.type;

  });
}
cssClass() {
  debugger;
  if (!this.alert) {
      return;
  }

  // return css class based on alert type
  switch (this.alert.type) {
      case AlertType.Success:
          return 'alert alert-success';
      case AlertType.Error:
          return 'alert alert-danger';
      case AlertType.Info:
          return 'alert alert-info';
      case AlertType.Warning:
          return 'alert alert-warning';
  }
}
}
