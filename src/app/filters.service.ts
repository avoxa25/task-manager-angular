import { Injectable } from '@angular/core';
import { ITask } from './task.service';

export interface IFilter {
  name: string;
  tasksCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  public currentFilter?: IFilter;

constructor() { }

private filters: IFilter[] = [
  {
    name: `All`,
    tasksCount: 0
  },
  {
    name: `Overdue`,
    tasksCount: 0
  },
  {
    name: `Today`,
    tasksCount: 0
  },
  {
    name: `Favorites`,
    tasksCount: 0
  },
  {
    name: `Repeating`,
    tasksCount: 0
  },
  {
    name: `Archive`,
    tasksCount: 0
  }
]

public getFilters(): IFilter[] {
  return this.filters;
}

public filterTasks(filter: IFilter): void {
  this.currentFilter = filter;
  console.log(filter.name);
}

public getCurrentFilter(): IFilter {
  if(this.currentFilter) {
    return this.currentFilter;
  }
    return this.filters[0];
}

public countTasks(tasks: ITask[]): void {
  tasks.forEach(t => {
    if(t.isArchived) {
      this.filters[5].tasksCount++
    }
    if(t.isRepeating) {
      this.filters[4].tasksCount++
    }
    if(t.isFavorite) {
      this.filters[3].tasksCount++
    }
  })
  this.filters[0].tasksCount = tasks.length - this.filters[5].tasksCount
}

}
