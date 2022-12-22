import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'category', 'date', 'status','actions'];
  dataSource = new MatTableDataSource<Task>();
  disableSelect = new FormControl(false);

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
  }
  deleteTask(id:number){
    this.taskService.deleteTask(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((e:Task)=>{
        return e.id!=id?e:false
      })
    })
  }
  updateTask(id:number){

  }
}


