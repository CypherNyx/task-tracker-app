import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];

  // In order to use a service you need to inject it into the constructor of the component 
   constructor (private taskService: TaskService) { }

  // This void here only means this function doesn't return anything.
  ngOnInit(): void {
    // Set the property tasks that right now is just an empty array and set it to whatever this gives us back.
    //this.tasks = this.taskService.getTasks();
    
    // Ideally this should be done with an observable instead.
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

}
