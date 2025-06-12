import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  public isHovered: BehaviorSubject<string> = new BehaviorSubject("")

  private usersOrPosts = new BehaviorSubject("posts");
  action$ = this.usersOrPosts.asObservable();
  userAction$ = this.isHovered.asObservable();

  triggerAction(data: string) {
    this.isHovered.next(data);
  }
  getUsersOrPosts(data: string) { 
    this.usersOrPosts.next(data)
  }

}
