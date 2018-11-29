import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
	private path;
	public allTodos = [];
  constructor(private todoService: TodoService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params.status;
      this.todoService.getTodos(this.path).subscribe(todos => this.allTodos = todos);
    })

  }

}
