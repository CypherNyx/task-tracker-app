import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title: string = 'My Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
}
