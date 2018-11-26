import { Injectable, Input } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  @Input()
  private todo: Todo;

	public allTodos: Todo[] = [];
  private todos = new BehaviorSubject<Todo[]>(null);
	private nextId: number; 
  
  constructor(private storageService: StorageService) {
    this.loadTodos();
  }  

  public addTodo(text: string) : void{
    let todos = this.allTodos;
    if (todos.length == 0) { 
      this.nextId = 0;
    } else {
      let maxId = todos[todos.length - 1].id;
      this.nextId = maxId + 1;
    }
  	let todo = new Todo(this.nextId, text, false);
    todos.push(todo);
    this.storageService.setTodos(todos);
  	this.nextId++;
    this.lengthTodos();
  }

  public loadTodos (){
    this.storageService.getTodos().subscribe(todos => this.allTodos = todos);
    this.todos.next(this.allTodos);
  }

  public getTodos(): Observable<Todo[]>{
    return this.todos.asObservable();
  }

  public removeTodo(selectedTodo): void{
    let todos = this.allTodos;
    todos.splice(todos.findIndex((todo) => todo.id == selectedTodo), 1);
    this.storageService.setTodos(todos);
    this.todos.next(todos);
  }

  public deleteCompleted(){
    let todos = this.allTodos;
    let completedTodos = todos.filter(todo => todo.completed !== true);
    todos = completedTodos;
    this.storageService.setTodos(todos);
    this.todos.next(todos);
  }

  public lengthTodos(){
    let todos = this.allTodos;
    let activeTodos = todos.filter((todo) => !todo.completed).length;
    this.todos.next(todos);
    return activeTodos;
  }

  public update(id, newValue){
    let todos = this.allTodos;
    let todoToUpdate = todos.find((todo) => todo.id == id);
    todoToUpdate.text = newValue;
    this.storageService.setTodos(todos);
    this.todos.next(todos);
  } 

  public isCompleted(id: number, completed: boolean){
    let todos = this.allTodos;
    let todoToComplete = todos.find((todo) => todo.id == id);
    todoToComplete.completed = !todoToComplete.completed;
    this.storageService.setTodos(todos);
    this.todos.next(todos);
  }
}
