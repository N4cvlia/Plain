import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }
  private usersOrPosts = new BehaviorSubject("users");
  action$ = this.usersOrPosts.asObservable();

  getUsersOrPosts(data: string) {
    this.usersOrPosts.next(data)
  }
}
