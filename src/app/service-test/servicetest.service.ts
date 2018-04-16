import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
//import { Alert } from '../interfaces/alert';
import { debug } from 'util';
import { Alert, AlertType } from '../clasess/alert';

@Injectable()
export class ServicetestService {
  test : string  = "tested values";
  subject = new Subject<Alert>()
  
  constructor() { }

  showAlert(title: string, type: string , time: number, body: string){
    // debugger
    // this.subject.next({
    //   title,
    //   type,
    //   time, 
    //   body
    // });
  }
  getAlert(type: AlertType ,message : string){
    debugger;
    this.subject.next({ type, message });

  }

}
