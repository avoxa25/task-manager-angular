import { Injectable } from '@angular/core';
import tasksData from '../mock.json';
import { FiltersService, IFilter } from './filters.service';

export interface ITask {
  _id: string,
  type: string,
  color: string,
  text: string,
  date: string,
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

public getCurrentFilter(): IFilter {
  return this.filtersService.getCurrentFilter();
}

}
