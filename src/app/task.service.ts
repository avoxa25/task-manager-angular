import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class TaskService {

constructor() { }

tasks: ITask[] = tasksData;

public getTasks(): ITask[] {
  return this.tasks;
}
}
