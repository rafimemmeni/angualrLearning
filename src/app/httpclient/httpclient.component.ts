import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'; 
import { debug } from 'util';
import {Student} from './Student'


@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})

export class HttpclientComponent {
  
readonly ROOT_URL ='https://jsonplaceholder.typicode.com'
posts: any;
url : any;
student : Student[];
  constructor(private http:HttpClient) { }

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts')
  }

  addData(){
    debugger;
    
    this.url = 'http://localhost:50788/MyServiceRest.svc' + '/addData';
   //this.url = 'http://jsonplaceholder.typicode.com/posts';

 
   this.student = [{
      StudentName : "gg",
      SDepartment: "bar",
      SAddress :"ss",
      SMobile: "1",
   }];
    //let body = JSON.parse(JSON.stringify(a));
    
    const req = this.http.post(this.url, this.student)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );

    // const req = this.http.post(this.url, [{
    //   StudentName: "foo",
    //   SDepartment: "bar",
    //   SAddress :"ss",
    //   SMobile: "1"
    // }])
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log("Error occured");
    //     }
    //   );
  }

}
