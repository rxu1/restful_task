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

  deleteTask(id) {
    return this._http.delete(`/api/tasks/${id}`);
  }
  
  editTask(id, data) {
    return this._http.put(`/api/tasks/${id}`, data);
  }
}



