import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from 'app/add-post.service';
import { PostPayload } from 'app/add-post/post-payload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  permaLink:Number;
  post: PostPayload;

  constructor(private router:ActivatedRoute, private postService:AddPostService){

  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.postService.getPost(this.permaLink).subscribe((data:PostPayload) => {
      this.post = data;
    },(err: any) => {
      console.log('Failure Response');
    })
  }
}
