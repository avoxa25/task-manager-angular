import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from './task.service';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: ITask[], currentFilterName: String): ITask[] {
    if (!currentFilterName) {
      return tasks;
    }
    switch (currentFilterName) {
      case `All`:
        return tasks.filter((task: ITask) => task.isArchived == true);
      case `Overdue`:
        return tasks;
      case `Today`:
        return tasks;
      case `Favorites`:
        return tasks.filter((task: ITask) => task.isFavorite !== true);
      case `Archive`:
        return tasks.filter((task: ITask) => task.isArchived !== true);
      default:
        return tasks;
    }
  }
}

