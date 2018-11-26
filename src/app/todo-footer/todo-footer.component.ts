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

	// private activeTasks : number = this.allTodos.length;

  constructor(private todoService: TodoService) {
    
  }

  public getLength(){
  	this.todoService.lengthTodos();
  }

  private clearCompleted(){
    this.todoService.deleteCompleted(); 
  }

  ngOnInit() {
  	this.todoService.getTodos().subscribe(todos => this.allTodos = todos);
  }

}
