import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo/todo';
import { FilterTodoPipe } from '../filter-todo.pipe';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  newTodo: string;
  filterType: string;
  toggle:boolean;
  constructor (public todoService :TodoService){}

  ngOnInit() {
    this.toggle = true;
    this.filterType = "all";
  }
  remove(index: number) {
    this.todoService.getTodo().splice(index,1);
    this.toggle = !this.toggle;
  }
  addTodo() {
    this.todoService.getTodo().push(
      {
        isDone: false,
        task: this.newTodo
      }
    );
    this.newTodo = '';
    this.toggle = !this.toggle;
  }
}
