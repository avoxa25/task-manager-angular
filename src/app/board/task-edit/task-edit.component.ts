import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {

  @Input() editingTask: ITask = {
    "_id": "",
    "type": "",
    "color": "",
    "text": "",
    "date": "",
    "isFavorite": false,
    "isDeadline": false,
    "isArchived": false,
    "isRepeating": false,
    "isEditing": false
  };

  constructor() { }


}
