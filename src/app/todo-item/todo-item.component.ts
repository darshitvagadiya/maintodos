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

  public editing = false;

  private isReadOnly: boolean = true;

  public allTodos;

  private todoText;
  private todoDesc;


  constructor(private todoService: TodoService, private storageService: StorageService){
    // this.todoService.getTodos().subscribe(todos => this.allTodos = todos);
  };

  ngOnInit() {

  }

  private edit(e){
    this.editing = !this.editing;
    this.todoText = this.todo.text;
    this.todoDesc = this.todo.description;
  }

  private toggleCompleted(){
    this.todoService.isCompleted(this.todo.id, this.todo.completed);
  }

  private updateTodo(){
    this.todoService.update(this.todo.id, this.todoText, this.todoDesc);
  }

  private removeTodo(name: string){
  	if(confirm("Are you sure you want to delete?")){
      this.todoService.removeTodo(this.todo.id);
    } 
  }

}
