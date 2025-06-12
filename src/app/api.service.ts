import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  getAllPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  getAllPostsbyId(id: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }
  getTodosById(id: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
  }
}
