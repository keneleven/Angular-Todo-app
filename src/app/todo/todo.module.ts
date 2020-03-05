import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { FilterTodoPipe } from '../filter-todo.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    FilterTodoPipe,
    HttpClientModule,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ //นำออกไปใช้ในกับคนอื่นที่ import ได้
    TodoListComponent
  ]
})
export class TodoModule { }
