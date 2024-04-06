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

  deleteTask(task: Task){
    // Call the deleteTask method from the taskService. This sends a DELETE request to the server.
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
        // After the server responds, filter out the deleted task from the tasks array.
        // The 'subscribe' method is used to subscribe to the Observable returned by deleteTask.
        // The arrow function inside 'subscribe' is executed when the Observable emits the response from the server.
        );
  }

}
