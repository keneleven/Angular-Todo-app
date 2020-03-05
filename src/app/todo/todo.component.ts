import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() index: number;
  @Output() remove = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  delete() {
    this.remove.emit(this.index);
  }

}
