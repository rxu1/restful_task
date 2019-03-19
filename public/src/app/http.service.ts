import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  export class HttpService {
    constructor(private _http: HttpClient) {
      // this.getTasks();
      // this.getOneTask1();
      // this.getOneTask2();
      // this.getOneTask3();
      // this.getOneTask4();
  }
  
  getTasks() {
    // let tempObservable = this._http.get('/api/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/api/tasks');
  }

  createNewTask(data: any) {
    return this._http.post('/api/tasks', data);
  }

  getOneTask1() {
    let ID1 = '5c8b39f7348add6c448cb2df';
    // let task1Observable = this._http.get('/api/tasks/'+ID1);
    // task1Observable.subscribe(data => console.log("Got one task!", data));
    return this._http.get('api/tasks/'+ID1);
  }

  getOneTask2() {
    let ID2 = '5c907862db8e792b40526ce6';
    // let task2Observable = this._http.get('/api/tasks/'+ID2);
    // task2Observable.subscribe(data => console.log("Got the other task!", data));
    return this._http.get('/api/tasks/'+ID2);
  }
  getOneTask3() {
    let ID3 = '5c90787cdb8e792b40526ce7';
    // let task3Observable = this._http.get('/api/tasks/'+ID3);
    // task3Observable.subscribe(data => console.log("Got the other task!", data));
    return this._http.get('/api/tasks/'+ID3);
  }
  getOneTask4() {
    let ID4 = '5c9078badb8e792b40526ce8';
    // let task4Observable = this._http.get('/api/tasks/'+ID4);
    // task4Observable.subscribe(data => console.log("Got the other task!", data));
    return this._http.get('/api/tasks/'+ID4);
  }
}



