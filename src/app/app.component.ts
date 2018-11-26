import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public allTodos = [];
	constructor(private todoService: TodoService, private storageService: StorageService){
	};

	ngOnInit(){
		this.todoService.getTodos().subscribe(todos => this.allTodos = todos);
		// this.storageService.getTodos().subscribe(todos => this.allTodos = todos);
	}
}
