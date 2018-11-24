import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskComponent } from './task.component';
import {CanActivate} from "@angular/router";
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./../app.component.css']
})
export class IndexComponent {
  title = 'Index';
  users: { username: string, password: string }[] =  [
    { "username": "emre", "password": "123456asd" },
    { "username": "test", "password": "123456asd" },
    { "username": "admin", "password": "123456asd" }
];
    username:string;
    password:string;

    constructor(private router:Router,private user:UserService){

    }

  login(){
      if (this.users.find(search => search.username== this.username && search.password==this.password)){
            this.user.setUserLoggedIn(this.username);
            this.router.navigateByUrl('/task');
      }else{
          alert("Kullanıcı adı veya Şifre Hatalı !");
      }
  }

}

