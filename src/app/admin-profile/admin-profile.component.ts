import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../signup/signup.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  userForm!:FormGroup;
  role:string="Admin";
  isVisible:boolean=false;

  constructor(private fb:FormBuilder,    private userService:UserService,
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.userForm = this.fb.group({
      userName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  handleCancel(){
    this.isVisible=false;
  }

  addUser(){
    this.userService.signup(new Users(this.userForm.value.userName,
      this.userForm.value.password,
      this.userForm.value.email,
      true,
      this.role    
    )).subscribe(res=>{
      console.log(res);
      
    })

  }
  showModal(){
    this.isVisible=true;
  }




}
