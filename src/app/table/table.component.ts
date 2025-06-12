import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { SubjectsService } from '../subjects.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  constructor(private api: ApiService, private routing : Router, private subjects: SubjectsService){
    
    
  }
  ngOnInit(): void {
    this.subjects.action$.subscribe({
      next: (data: any) => {
        this.usersOrPosts = data;
      }
    })
    this.getUsers()
    this.getAllPosts()
  }

  @ViewChild('popup') search! : ElementRef;
  public users: any = [];
  public users2: any = [];
  public usersOrPosts: any = "posts";
  public isVisib: boolean = false;
  public allPosts: any;
  public popUpData: any;
  public searchInput: any;


  @HostListener("document:click", ['$event'])
  onDocumentClick(event: Event): void {
  if (this.search?.nativeElement && !this.search.nativeElement.contains(event.target as Node)) {
    this.isVisib = false;
  }
}
  

  searchUp() {
    this.api.getUsers().subscribe({
      next: (data: any) => {
        this.users = data.filter((user:any) => user.name.toLowerCase().includes(this.searchInput.toLowerCase()) || user.email.toLowerCase().includes(this.searchInput.toLowerCase()));
      }
    })
  }

  getDetails(title: string, body: string, id: number) {
    this.isVisib = true;
    this.popUpData = {title: title,body: body, id: id};
  }

  getAllPosts() {
    this.api.getAllPosts().subscribe({
      next: (data : any) => {
        this.allPosts = data;
      }
    })
  }

  getUsers() {
    this.api.getUsers().subscribe({
      next: (data: any) => {
        this.users = data;
        this.users2 = data;
      }
    })
  }
  goToPosts(user : any, userName: any) {
    this.subjects.isHovered.next("kill")
    this.routing.navigate(['/User'], {queryParams: {id : user.id, name: userName}})
  }
  goToTodo(user: any, userName: any) {
    this.routing.navigate(["/Todo"], {queryParams: {id: user.id, name: userName}})
    this.subjects.isHovered.next("kill")
  }
}
