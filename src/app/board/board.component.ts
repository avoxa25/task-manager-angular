import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public filter?: String;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  public tasks = this.taskService.getTasks();

  public getFilter(): String {
    return this.taskService.getCurrentFilterName()
  }
   
}
