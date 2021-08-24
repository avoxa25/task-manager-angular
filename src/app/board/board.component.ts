import { Component, OnInit } from '@angular/core';
import { IFilter } from '../filters.service';
import { ITask, TaskService } from '../task.service';

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

  public changeSortType(sortType: string): void {
    this.taskService.changeSortType(sortType);
  }

  public getSortType(): string {
   return this.taskService.getSortType();
  }

  public getLoadMore(): boolean {
    return this.taskService.getLoadMore();
  }

  public setLoadMore() {
    this.taskService.setLoadMore();
  }

  public changeArchiveState(task: ITask): void {
    this.taskService.changeArchiveState(task);
  }

  public changeFavoriteState(task: ITask): void {
    this.taskService.changeFavoriteState(task);
  }
   
}
