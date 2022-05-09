import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, DoCheck, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzPaginationI18nInterface } from 'ng-zorro-antd/i18n';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  role:any;
  link!:string;

  ngOnInit(){
    this.role=sessionStorage.getItem("role");
    this.profile_navigate();
  }
  constructor(private userService:UserService,private router:Router){}

  profile_navigate(){
    this.link=(this.role=='USER')?'/user-profile':'/admin-profile';
    
  }

logout(){
this.userService.logout('/logout').then(res=>{
  this.router.navigate(['/login']);
  sessionStorage.clear();
}).catch(error => {
  this.router.navigate(['/logout']);
  sessionStorage.clear();
});
}


}