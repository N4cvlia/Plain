import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{
  constructor(private subjects: SubjectsService, private routing: Router) {

  }
  ngOnInit(): void {
    this.subjects.userAction$.subscribe({
      next: (data: any) => {
        if(data == "hover") {
          this.isHovered3 = true
          this.isHovered4 = false;
        }else {
          this.isHovered4 = false;
        }
      }
    })
  }
  public isHovered1 = false;
  public isHovered2 = false;
  public isHovered3 = true;
  public isHovered4 = false;

  onHover(num: number) {
    num == 1 ? this.isHovered1 = true : this.isHovered2 = true
  }
  unHover(num: number) {
    num == 1 ? this.isHovered1 = false : this.isHovered2 = false
  }

  goToPosts() {
    // under construction
    this.routing.navigate([""])
    this.subjects.getUsersOrPosts("posts")
    this.isHovered3 = true;
    this.isHovered4 = false;
  }
  goToUsers() {
    this.routing.navigate([""])
    this.subjects.getUsersOrPosts("users")
    this.isHovered3 = false;
    this.isHovered4 = true;
  }
}
