import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './addtask.component.html',
  styleUrls: ['./../app.component.css']
})
export class AddTask {
  title = 'addtask';
  task:string;
  constructor(private user:UserService,private data:DataService,private router:Router){

  }

  addtask(){

    if(typeof this.task!='undefined' && this.task){
      this.data.addTask(this.task);
      this.router.navigateByUrl('task');
    }else{
      alert("Eklenecek Görev Boş Olamaz !");
    }
  
   
  }


}