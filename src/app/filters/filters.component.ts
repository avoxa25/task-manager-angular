import { Component, OnInit } from '@angular/core';
import { FiltersService, IFilter } from '../filters.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(
    private filtersService: FiltersService,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.filtersService.countTasks(this.taskService.getTasks());
  }

  filters = this.filtersService.getFilters();

  public filterTasks(filter: IFilter): void {
    this.filtersService.filterTasks(filter)
  }
}
