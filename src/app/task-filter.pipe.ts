import { Pipe, PipeTransform } from '@angular/core';
import { IFilter } from './filters.service';
import { ITask } from './task.service';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: ITask[], currentFilter: IFilter, sortType: string = `default`): ITask[] {
    let filteredTasks = tasks;

    switch (currentFilter.name) {
      case `All`:
        filteredTasks = tasks.filter((task: ITask) =>
          task.isArchived == true);
        break;
      case `Overdue`:
        break;
      case `Today`:
        break;
      case `Favorites`:
        filteredTasks = tasks.filter((task: ITask) =>
          task.isFavorite !== true);
        break;
      case `Repeating`:
        filteredTasks = tasks.filter((task: ITask) =>
          task.isRepeating !== true);
        break;
      case `Archive`:
        filteredTasks = tasks.filter((task: ITask) =>
          task.isArchived !== true);
    }

    switch(sortType) {
      case `default`:
        break;
      case `date-up`:
        filteredTasks.sort((a,b) => {
          if(a.date > b.date) return 1;
          if(a.date < b.date) return -1;
          return 0;
        })
        break;
      case `date-down`:
        filteredTasks.sort((a,b) => {
          if(a.date > b.date) return -1;
          if(a.date < b.date) return 1;
          return 0;
        })
        break;
    }
    return filteredTasks;
  }
}

