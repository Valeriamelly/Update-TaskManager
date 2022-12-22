import { AddGroupComponent } from './components/add-group/add-group.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTaskComponent } from './components/list-estudiante/list-task.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'task', component: ListTaskComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: 'add-group', component: AddGroupComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
