import { Component } from '@angular/core';
import { ServicetestService } from './service-test/servicetest.service';
import { AlertType } from './clasess/alert';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private servicetest: ServicetestService) {

  }
  title = 'Tour of Heroes';


  ngOnInit(){
  }
  success(message: string) { 
    debugger;
    this.servicetest.getAlert(AlertType.Success, message);
}
 

}
