import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  
  @Input()
  private allTodos

  
  private path;

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
  }

  private getLength(){
    return this.allTodos.filter(todo => !todo.completed).length;
  }

  private clearCompleted(){
    this.todoService.deleteCompleted(); 
  }

  ngOnInit() {}
  

}
