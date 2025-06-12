import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private routing: Router, private subjects: SubjectsService) {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
  public now = new Date();

  goToMain() {
    this.routing.navigate([""])
    this.subjects.getUsersOrPosts("posts")
    this.subjects.isHovered.next("hover")
  }
}
