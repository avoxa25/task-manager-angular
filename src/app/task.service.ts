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
  isArchived: boolean,
  isRepeating: boolean
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

  public repeatingCheck() {
    // TO DO
    for (let i = 0; i < this.tasks.length; i++) {
      for (let j = 0; j < this.tasks.length; j++) {
        if (j === i) {

        } else {
          if (this.tasks[i] === this.tasks[j]) {
            this.tasks[i].isRepeating, this.tasks[j].isRepeating = true;
            console.log(this.tasks[i].isRepeating + ` ----- ` + this.tasks[j].isRepeating)
          }
        }

      }
    }
  }
}
