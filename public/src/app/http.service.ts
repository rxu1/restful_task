import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
  export class HttpService {
    constructor(private _http: HttpClient) {
      this.getTasks();
      this.getOneTask1();
      this.getOneTask2();
  }
  
  getTasks() {
    let tempObservable = this._http.get('/api/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getOneTask1() {
    let ID = '5c8b36a5adf80f6c15bcc140';
    let taskObservable = this._http.get('/api/tasks/'+ID);
    taskObservable.subscribe(data => console.log("Got one task!", data));
  }

  getOneTask2() {
    let ID1 = '5c8b39f7348add6c448cb2df';
    let task1Observable = this._http.get('/api/tasks/'+ID1);
    task1Observable.subscribe(data => console.log("Got the other task!", data));
  }
}



