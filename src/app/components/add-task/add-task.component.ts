import { Component,  } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  // When working with forms, always add a property for each field into the component class 
  text!: string;
  day!: string;
  reminder: boolean = false;


  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }


    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    //! @to-do - emit event

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
