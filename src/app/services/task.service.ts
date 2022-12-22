import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  basePatch: string = environment.basePatch;
  constructor(private http: HttpClient) {}

  getTasks(){
    return this.http.get<Task[]>(this.basePatch)
  }
  addTask(task:Task){
    return this.http.post<Task>(this.basePatch, task);
  }
  updateTask(id:any,task:Task){
    return this.http.put<Task>(`${this.basePatch}/${id}`,task)
  }


  deleteTask(id:any){
    return this.http.delete<Task>(`${this.basePatch}/${id}`)
  }
}
