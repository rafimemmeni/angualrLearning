import { Component } from '@angular/core';
import { ServicetestService } from './service-test/servicetest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private servicetest: ServicetestService) {

  }
  title = 'Tour of Heroes';


  testfromcomponet : string;
  ngOnInit(){
    this.testfromcomponet = this.servicetest.test;
    this.servicetest.test = "upfayrf"
    this.testfromcomponet = this.servicetest.test;
  }
 

}
