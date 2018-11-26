import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

	private todoText: string;


  constructor(private todoService: TodoService) { }

  ngOnInit(){

  }

  private addTodo(){
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }
}
