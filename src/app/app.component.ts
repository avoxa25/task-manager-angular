import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-manager';

  constructor(
    private taskService: TaskService
  ) {}

  public addTask(): void {
    this.taskService.addTask()
  }
}
