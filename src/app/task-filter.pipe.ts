import { Pipe, PipeTransform } from '@angular/core';
import { IFilter } from './filters.service';
import { ITask } from './task.service';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: ITask[], currentFilter: IFilter): ITask[] {
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
    return filteredTasks;
  }
}

