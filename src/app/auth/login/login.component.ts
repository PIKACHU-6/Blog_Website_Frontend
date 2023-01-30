import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginPayload } from '../login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayLoad: LoginPayload;

  constructor(private authservice: AuthService, private router: Router) {
    this.loginForm=new FormGroup({
      username:new FormControl(),
      password:new FormControl()
    });
    this.loginPayLoad={
      userName:'',
      password:''
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginPayLoad.userName=this.loginForm.get('username')?.value;
    this.loginPayLoad.password=this.loginForm.get('password')?.value;

    this.authservice.login(this.loginPayLoad).subscribe(data=>{
      if(data){
        console.log('login success');
        this.router.navigateByUrl('/home')
      }else{
        console.log('login failed');
      }
    });
  }

}
