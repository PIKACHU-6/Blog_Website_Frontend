//import { Component, OnInit } from '@angular/core';
import { AddPostService } from 'app/add-post.service';
import { Component, OnInit } from '@angular/core';
import { PostPayload } from 'app/add-post/post-payload';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  posts: Observable<Array<PostPayload>>;
  constructor(private postService:AddPostService){

  }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }
}


