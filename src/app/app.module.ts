import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './pages/task.component';
import { IndexComponent } from './pages/index.component';
import { AuthGuard } from './auth.guard';
import { UserService } from './services/user.service';
import { DataService } from './services/data.service';
import { AddTask } from './pages/addtask.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTask,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:IndexComponent},
      {path:'task',component:TaskComponent,canActivate:[AuthGuard]},
      {path:'addtask',component:AddTask,canActivate:[AuthGuard]},
      {path:'**',component:IndexComponent},
    ]),
    AppRoutingModule
  ],
  providers: [AuthGuard,UserService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
