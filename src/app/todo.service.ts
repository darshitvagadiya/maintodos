import { Injectable, Input } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable, of, BehaviorSubject, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  @Input()
  private todo: Todo;

	public allTodos: Todo[] = [];

  private todos = new BehaviorSubject<Todo[]>(null);
  public todos$: Observable<Todo[]> = this.todos.asObservable();
	private nextId: number; 
  public editedAt: Date;
  
  constructor(private storageService: StorageService) {
    this.loadTodos();
  }  

  public addTodo(text: string, description: string) : void{
    this.storageService.getTodos().subscribe(todos => this.allTodos = todos);
    let todos = this.allTodos;
    if (todos.length == 0) { 
      this.nextId = 0;
    } else {
      let maxId = todos[todos.length - 1].id;
      this.nextId = maxId + 1;
    }
  	let todo = new Todo(this.nextId, text, description, false, new Date(), this.editedAt);
    todos.push(todo);
    this.storageService.setTodos(todos);
  	this.nextId++;
    this.todos.next(this.allTodos);
  }

  public loadTodos (){
    this.storageService.getTodos().subscribe(todos => this.allTodos = todos);
    this.todos.next(this.allTodos);
  }

  public getTodos(query): Observable<Todo[]>{
    if(query === 'completed' || query === 'active'){
      const isCompleted = query === 'completed';
      let todos = this.allTodos.filter(todo => todo.completed === isCompleted);
      this.todos.next(todos);
      return this.todos.asObservable();
    }else{
      let todos = this.allTodos;
      this.todos.next(todos);
      return this.todos.asObservable();
    }  
  }

  public titleSort(){
    return this.allTodos.sort((a, b) => {
      return a.text.localeCompare(b.text);
    })
  }

  public dateSort(){
    return this.allTodos.sort((a, b) => {
      return new Date(a.edited_at || a.created_at).getTime() - new Date(b.edited_at || b.created_at).getTime()}).reverse();
  }

  public descriptionSort(){
    return this.allTodos.sort((a, b) => {
      return a.description.localeCompare(b.description);
    })
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
	this.storageService.getTodos().subscribe(todos => this.allTodos = todos);
  }

  public update(id, newValue, newDesc){
    this.storageService.getTodos().subscribe(todos => this.allTodos = todos);
    let todos = this.allTodos;
    let todoToUpdate = todos.find((todo) => todo.id == id);
    todoToUpdate.text = newValue;
    todoToUpdate.description = newDesc;
    todoToUpdate.edited_at = new Date();
    this.storageService.setTodos(todos);
    this.todos.next(todos);
  } 

  public isCompleted(id: number, completed: boolean){
    this.storageService.getTodos().subscribe(todos => this.allTodos = todos);
    let todos = this.allTodos;
    let todoToComplete = todos.find((todo) => todo.id == id);
    todoToComplete.completed = !todoToComplete.completed;
    this.storageService.setTodos(todos);
    this.todos.next(todos);
  }
}
