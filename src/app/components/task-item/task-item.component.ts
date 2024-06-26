import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
  // create a custom event called onDeleteTask as an EventEmitter, and that event will carry a payload of type Task. 
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  // create a custom event called onToggleReminder as an EventEmitter, and that event will  
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task | undefined){
    this.onToggleReminder.emit(task);
  }
}
