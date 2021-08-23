import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(
    private filtersService: FiltersService
  ) { }

  ngOnInit() {

  }

  filters = this.filtersService.getFilters();

  public filterTasks(filterName: String): void {
    this.filtersService.filterTasks(filterName)
  }
}
