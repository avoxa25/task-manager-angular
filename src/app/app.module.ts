import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { BoardComponent } from './board/board.component';
import { TaskFilterPipe } from './task-filter.pipe';

@NgModule({
  declarations: [		
    AppComponent,
      FiltersComponent,
      BoardComponent,
      TaskFilterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
