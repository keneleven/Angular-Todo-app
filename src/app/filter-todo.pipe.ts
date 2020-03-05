import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo/todo';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Todo[], filterType: string): Todo[] {
    if(filterType === 'done'){
      return todos.filter(todo => todo.isDone === true);
    }
    else if(filterType === 'undone'){
      return todos.filter(todo => todo.isDone === false);
    }
    return todos;
  }

}
