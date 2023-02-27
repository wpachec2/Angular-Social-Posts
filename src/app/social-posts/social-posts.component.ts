import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  Posts: Post[] = [
    {
      Title: "Stressed",
      Thought: "This bootcamp is coming to an end."
    }
  ];

  Hide: boolean = false;
  ToggleForm(): void{
    this.Hide = !this.Hide;
  }

  AddPost(newPost: Post){
    this.Posts.push(newPost);
  }

  filter: string = "";

  getFiltered(): Post[]{
    return this.Posts.filter((p: Post) => p.Title.includes(this.filter));
  }

  RemovePost(Posts: Post): void{
    this.Posts.splice(1);
  }
}
