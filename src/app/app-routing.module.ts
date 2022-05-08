import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    {path:'',redirectTo:'signup',pathMatch:'full'},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'user-profile',component:UserProfileComponent},
    {path:'admin-profile',component:AdminProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
