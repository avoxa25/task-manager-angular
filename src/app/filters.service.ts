import { Injectable } from '@angular/core';

interface IFilter {
  name: String;
  tasksCount: Number;
}

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  currentFilterName?: String;

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

public filterTasks(filterName: String): void {
  this.currentFilterName = filterName;
  console.log(filterName);
}

}
