import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ITask, TaskService } from 'src/app/task.service';

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

  constructor(
    private taskService: TaskService
  ) { }

  public changeColor(color: string): void {
    this.editingTask.color = color;
  }

  public delete(task: ITask): void {
    this.taskService.deleteTask(task);
  }

  public changeEditState(task: ITask): void {
    this.taskService.changeEditState(task);
  }


}
