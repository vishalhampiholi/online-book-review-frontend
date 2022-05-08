import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username:string='alex';
  userdetails:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }


  getUserDetails(){
    this.userService.getUser(this.username).subscribe(res=>{
      this.userdetails=res;
      console.log(this.userdetails);
    })
  }

  

}
