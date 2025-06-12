import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-page',
  imports: [CommonModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {
  constructor(private res: ActivatedRoute, private api: ApiService){}
  ngOnInit(): void {
    this.getId();
  }
  @ViewChild('popup') search! : ElementRef;
  public userPosts : any;
  public name : any;
  public isVisib: boolean = false;
  public popUpData: any;

  @HostListener("document:click", ['$event'])
  onDocumentClick(event: Event): void {
  if (this.search?.nativeElement && !this.search.nativeElement.contains(event.target as Node)) {
    this.isVisib = false;
  }
}
  

  getDetails(id: any) {
    this.isVisib = true;
    this.popUpData = this.userPosts[id];
  }

  getId() {
    this.res.queryParams.subscribe({
      next: (data: any) => {
        this.getPosts(data.id)
        this.name = data.name;
      }
    })
  }
  getPosts(id: any) {
    this.api.getAllPostsbyId(id).subscribe({
      next: (data: any) => {
        this.userPosts = data
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
