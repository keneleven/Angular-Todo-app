import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ // นำมาใช้
    BrowserModule,
    AppRoutingModule,
    TodoModule //  นำ export todo-list component จาก todo module มาใช้
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
