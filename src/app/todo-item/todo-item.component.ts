import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

	@Input()
	private todo: Todo;

  private isReadOnly: boolean = true;

  public allTodos;

  constructor(private todoService: TodoService, private storageService: StorageService){
    this.todoService.getTodos().subscribe(todos => this.allTodos = todos);
  };

  ngOnInit() {
  }

  private toggleCompleted(){
    this.todoService.isCompleted(this.todo.id, this.todo.completed);
  }

  toggleEdit(){
    this.isReadOnly = !this.isReadOnly;
  }

  private updateTodo(){
    this.todoService.update(this.todo.id, this.todo.text);
    this.toggleEdit();
  }

  private removeTodo(){
  	this.todoService.removeTodo(this.todo.id); 
  }

}
