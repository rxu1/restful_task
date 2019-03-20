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
  updateForm: boolean = false; 
  selectedTaskId: string; 
  updatedTask: any = {
    title: '',
    description: ''
  }

  constructor(private _httpService: HttpService){}
    ngOnInit(){
      this.task = {title: "", description: ""}
    }
    createTask = () => {
      let observable = this._httpService.createNewTask(this.task);
      observable.subscribe(data => {
        console.log("Successfully created a task!", data);
        this.task = {title: "", description:""};
        this.getTasks();
      })
    }

    // subButtonClick(id) {
    //   let task = document.getElementById(id);
    //   task.style.visibility = 'visible'
    // }
    getTasks() {
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        console.log("Got our tasks!", data);
        this.tasks = data;
        // console.log(data['title']); 
      })
    }
    deleteTask = (id) => {
      let observable = this._httpService.deleteTask(id);
      observable.subscribe(data => {
        console.log("Just deleted a task!", data);
        this.getTasks();
      })
    }

    getEditForm(id: string): void {
      this.updateForm = true;
      this.selectedTaskId = id[0];
      console.log(this.selectedTaskId);
    }
    
    editTask = () => {
      let observable = this._httpService.editTask(this.selectedTaskId, this.updatedTask);
      observable.subscribe(data => {
        this.task = data;
        this.getTasks();
        console.log("Just edited the task!", data);
        this.updatedTask = {title: '', description: ''}
      });
    }
}
