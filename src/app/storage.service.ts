import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos: todos }))
  }
 
  public getTodos(): Observable<Todo[]>{
  	let localStorageItem = JSON.parse(localStorage.getItem('todos'));
  	if(localStorageItem == null){
  		return of([]);
  	}else{
  		return of(localStorageItem.todos);
  	}
  }
}
