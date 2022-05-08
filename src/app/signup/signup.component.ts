import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



export class Users{
  constructor(
    private username:string,
    private password:string,
    private email:string,
    private enabled:boolean,
    private role:string
  ){}
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  userForm!:FormGroup;
  role:string="USER";
  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.createUserForm();
  }


  createUserForm(){
    this.userForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }


  signup(){
    this.userService.signup(new Users(
      this.userForm.value.userName,
      this.userForm.value.password,
      this.userForm.value.email,
      true,
      this.role    
    )).subscribe(res=>{
      console.log(res);
      this.router.navigate(['home']);
      
    })
  
    
  }
}
