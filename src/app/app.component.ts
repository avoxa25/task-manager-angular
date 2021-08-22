import { Component } from '@angular/core';
import tasksData from '../mock.json';

interface ITask {
  _id: String,
  type: String,
  color: String,
  text: String,
  date: String,
  isFavorite: boolean,
  isDeadline: boolean,
  isArchived: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-manager';

  tasks: ITask[] = tasksData;
}
