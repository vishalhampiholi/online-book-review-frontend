import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm!:FormGroup
  loginError: any;

  constructor(private fb:FormBuilder,
    private userService:UserService,
    private router:Router) { }


  ngOnInit(): void {
    this.createLoginForm();
  }


  createLoginForm(){
    this.loginForm=this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  Login(){
    if (this.loginForm.value.userName === '' || this.loginForm.value.password === '') {
      alert("Username and Passord cannot be EMPTY");
    }else{
      this.userService.login('/login',this.loginForm.value.username,this.loginForm.value.password).then(res=>{
        this.router.navigate(['/home']);
    }).catch(error=>{
      this.loginError = "Invalid credentials";
    })
    
  }
}
  

}
