import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { BoardComponent } from './board/board.component';
import { TaskFilterPipe } from './task-filter.pipe';
import { FiltersPipe } from './filters.pipe';
import { TaskEditComponent } from './board/task-edit/task-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [		
    AppComponent,
      FiltersComponent,
      BoardComponent,
      TaskFilterPipe,
      FiltersPipe,
      TaskEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
