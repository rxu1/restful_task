import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Task API';
  tasks: any = [];
  task: any = [];
  // task = {
  //   title: '',
  //   description: ''
  // };

  constructor(private _httpService: HttpService){}
    ngOnInit(){
      this.getTasksFromService();
      this.getOneTask1FromService();
      this.getOneTask2FromService();
      this.getOneTask3FromService();
      this.getOneTask4FromService();
    }
    getTasksFromService() {
      console.log('fired');
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        console.log("Got our tasks!", data);
        this.tasks = data;
        // console.log(data['title']); 
      })
    }
    getOneTask1FromService() {
      
      let observable1 = this._httpService.getOneTask1();
      observable1.subscribe(data => {
        console.log("Got one task!", data);
        this.task = data;
      })
    }
    getOneTask2FromService() {
      let observable2 = this._httpService.getOneTask2();
      observable2.subscribe(data => {
        console.log("Got another task!", data);
        // this.task = data['task'];
      })
    }
    getOneTask3FromService() {
      let observable3 = this._httpService.getOneTask3();
      observable3.subscribe(data => {
        console.log("Got another task!", data);
        // this.task = data['task'];
      })
    }
    getOneTask4FromService() {
      let observable4 = this._httpService.getOneTask4();
      observable4.subscribe(data => {
        console.log("Got another task!", data);
        // this.task = data['task'];
      })
    }
}
