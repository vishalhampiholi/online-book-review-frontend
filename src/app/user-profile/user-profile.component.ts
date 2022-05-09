import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username!:any;
  userdetails:any;
  updateUser!:FormGroup;
  isVisible:boolean=false;
  constructor(private userService:UserService,
    private formBuilder:FormBuilder,) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem("username");
    this.getUserDetails();
    this.createUserForm();
    
  }

  
    createUserForm(){
      this.updateUser = this.formBuilder.group({
        username: new FormControl('', [Validators.required,Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
      });
    }
  

  getUserDetails(){
    this.userService.getUser(this.username).subscribe(res=>{
      this.userdetails=res;
      console.log(this.userdetails);
      console.log(this.userdetails.username)
    })
  }

  updateUserForm(){
    this.updateUser.patchValue({
      username:this.userdetails.username,
      email:this.userdetails.email,
    })
  }

updateUserDetails(){

}

showModal(){
  this.isVisible=true;
  this.updateUserForm();
}
handleCancel(){
  this.isVisible=false;
}

  

}
