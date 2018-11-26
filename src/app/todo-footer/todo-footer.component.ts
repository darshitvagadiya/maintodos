import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public allTodos;

  constructor(private todoService: TodoService) {
  }

  private getLength(){
    return this.allTodos.filter(todo => !todo.completed).length;
  }

  private clearCompleted(){
    this.todoService.deleteCompleted(); 
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => this.allTodos = todos);
  }

}
