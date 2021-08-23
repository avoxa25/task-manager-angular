import { Injectable } from '@angular/core';
import tasksData from '../mock.json';
import { FiltersService } from './filters.service';

export interface ITask {
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

constructor(
  public filtersService: FiltersService
) { }

tasks: ITask[] = tasksData;

public getTasks(): ITask[] {
  return this.tasks;
}

public getCurrentFilterName(): String {
  return this.filtersService.getCurrentFilterName();
}

}
