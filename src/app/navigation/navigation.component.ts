import { Component } from '@angular/core';
import { SubjectsService } from '../subjects.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private subjects: SubjectsService, private routing: Router) {

  }
  public isHovered1 = false;
  public isHovered2 = false;

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
  }
  goToUsers() {
    this.routing.navigate([""])
    this.subjects.getUsersOrPosts("users")
    
  }
}
