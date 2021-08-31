import { Pipe, PipeTransform } from '@angular/core';
import { IFilter } from './filters.service';
import { ITask } from './task.service';

@Pipe({
  name: 'filters',
  pure: false
})

export class FiltersPipe implements PipeTransform {

  transform(filters: IFilter[], tasks: ITask[]): IFilter[] {
    filters.forEach(f => f.tasksCount = 0);
    tasks.forEach(t => {
      if(t) {
        filters[0].tasksCount++
      }
      if(t.isArchived) {
        filters[5].tasksCount++
      }
      if(t.isRepeating) {
        filters[4].tasksCount++
      }
      if(t.isFavorite) {
        filters[3].tasksCount++
      }
    })

    filters[0].tasksCount -= filters[5].tasksCount;
    return filters;
  }

}
