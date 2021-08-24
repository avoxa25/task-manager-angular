import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { BoardComponent } from './board/board.component';
import { TaskFilterPipe } from './task-filter.pipe';
import { FiltersPipe } from './filters.pipe';

@NgModule({
  declarations: [		
    AppComponent,
      FiltersComponent,
      BoardComponent,
      TaskFilterPipe,
      FiltersPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
