import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo-lists',
  imports: [],
  templateUrl: './todo-lists.component.html',
  styleUrl: './todo-lists.component.css'
})
export class TodoListsComponent implements OnInit {
  constructor(private res: ActivatedRoute, private api: ApiService){}

  ngOnInit(): void {
    this.getId();
  }

  public todoList: any;
  public userName: any;

  getId() {
    this.res.queryParams.subscribe({
      next: (data: any) => {
        this.getTodos(data.id)
        this.userName = data.name;
      }
    })
  }
  getTodos(id: any) {
    this.api.getTodosById(id).subscribe({
      next: (data: any) => {
        this.todoList = data
      }
    })
  }
}
