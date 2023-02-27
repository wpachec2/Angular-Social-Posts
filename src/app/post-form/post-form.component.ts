import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  newPost: Post = {} as Post;
  @Output() PostCreated = new EventEmitter<Post>();


  CreatePost(): void{
    let result: Post = {
      Title: this.newPost.Title,
      Thought: this.newPost.Thought
    };

    this.PostCreated.emit(result);
  }

  
}
