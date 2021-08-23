import { Component, OnInit } from '@angular/core';
import { IFilter } from '../filters.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public filter?: string;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.repeatingCheck();
  }

  public tasks = this.taskService.getTasks();

  public getFilter(): IFilter {
    return this.taskService.getCurrentFilter()
  }
   
}
