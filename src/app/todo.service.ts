import { Injectable } from '@angular/core';
import { Todo } from './todo/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos: Todo[];
  constructor(private http: HttpClient) {
    this.http.get<Todo[]>('http://localhost:3000/todos').subscribe(todos => {
      this.todos = this.todos;
    });
  }
  getTodo(){
    return this.todos;
  }

  setTodo(todos:Todo[]){
    this.todos = todos;
  }

  getTodosFromAPT(){}
}
