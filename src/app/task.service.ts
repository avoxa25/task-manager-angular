import { Injectable } from '@angular/core';
import tasksData from '../mock.json';
import { FiltersService, IFilter } from './filters.service';

export interface ITask {
  _id: string,
  type: string,
  color: string,
  text: string,
  date: string,
  isFavorite: boolean,
  isDeadline: boolean,
  isArchived: boolean,
  isRepeating: boolean
  isEditing: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    public filtersService: FiltersService
  ) { }

  tasks: ITask[] = tasksData;
  sortType = `default`;
  loadMore = false;

  public addTask(): void {
    let task: ITask =   {
      "_id": "",
      "type": "",
      "color": "black",
      "text": "",
      "date": "",
      "isFavorite": true,
      "isDeadline": false,
      "isArchived": true,
      "isRepeating": false,
      "isEditing": true
    };
    this.tasks.unshift(task)
  }

  public deleteTask(task: ITask) {
    let index = this.tasks.indexOf(task);
    this.tasks = this.tasks.splice(index, 1);
  }

  public getTasks(): ITask[] {
    return this.tasks;
  }

  public getCurrentFilter(): IFilter {
    return this.filtersService.getCurrentFilter();
  }

  public changeSortType(sortType: string): void {
    this.sortType = sortType;
  }

  public getSortType(): string {
    return this.sortType;
   }

   public getLoadMore(): boolean {
     return this.loadMore;
   }

   public setLoadMore() {
    this.loadMore = !this.loadMore;
   }

   public changeEditState(task: ITask): void {
     task.isEditing = !task.isEditing;
   }

   public changeArchiveState(task: ITask): void {
    task.isArchived = !task.isArchived;
  }

  public changeFavoriteState(task: ITask): void {
    task.isFavorite = !task.isFavorite;
  }

  public repeatingCheck() {
    for (let i = 0; i < this.tasks.length; i++) {
      for (let j = 0; j < this.tasks.length; j++) {
        if (j === i) continue; 
        //TO DO
      }
    }
  }
}
