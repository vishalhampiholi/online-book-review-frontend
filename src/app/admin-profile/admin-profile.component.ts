import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../signup/signup.component';
import { UserService } from '../user.service';

export class book_info{
  constructor(
    id:number,
    name:string,
    seller:string,
    author:string,
    price:number,
    description:string
  ){}
}

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})

export class AdminProfileComponent implements OnInit {
  userForm!:FormGroup;
  role:string="ADMIN";
  isVisible:boolean=false;
  bookForm!:FormGroup;


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
    this.bookForm=this.fb.group({
      name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      seller: new FormControl('', [Validators.required, Validators.minLength(8)]),
      author: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }

  handleCancel(){
    this.isVisible=false;
  }

  addUser(){
    this.userService.signup(new Users(this.userForm.value.userName,
      this.userForm.value.password,
      this.userForm.value.email,
      this.role    
    )).subscribe(res=>{
      console.log(res);
      
    })

  }
  showModal(){
    this.isVisible=true;
  }




}
