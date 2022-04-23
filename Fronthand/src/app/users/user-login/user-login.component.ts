import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authservice : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm : NgForm) {
     console.log(loginForm.value);
     const token = this.authservice.authUser(loginForm.value);
     if(token){
       localStorage.setItem('token',token.userName);
       console.log("loginSuccessful");
       this.router.navigate(['/']);
     }else{
       console.log("login Not Successful");
     }
  }

}
