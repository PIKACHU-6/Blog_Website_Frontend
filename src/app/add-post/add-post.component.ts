import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddPostService } from 'app/add-post.service';
import { PostPayload } from './post-payload';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {


addPostForm: FormGroup;
title=new FormControl('');
body=new FormControl('');
postPayload: PostPayload;

constructor(private addPostService:AddPostService, private router :Router){
  this.addPostForm=new FormGroup({
    title:this.title,
    body:this.body
  });
  this.postPayload={
    id:'',
    content:'',
    title:'',
    username:''
  }
}

addPost() {
 this.postPayload.content=this.addPostForm.get('body')?.value;
  this.postPayload.title=this.addPostForm.get('title')?.value;
  this.addPostService.addPost(this.postPayload).subscribe(data=>{
    this.router.navigateByUrl('/')
  }, error=>{
    console.log('Failure response');
  })
}

}
