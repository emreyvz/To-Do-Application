import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './task.component.html',
  styleUrls: ['./../app.component.css']
})
export class TaskComponent {
  title = 'task';
  username:string;
  tasks:string[];
  finished:string[];

  constructor(private user:UserService,private data:DataService,private router:Router){
    this.username = user.getLoggedUsername();
    this.tasks = this.data.getCurrentTasks();
    this.finished = this.data.getFinishedTasks();
  }

    deleteTask(task:string){
        this.data.deleteTask(task);
    }

    logOut(){
       this.user.setUserLoggedOut;
       this.router.navigateByUrl('');
    }


}