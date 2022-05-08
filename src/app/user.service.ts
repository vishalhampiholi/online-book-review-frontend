import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookRivewHttpService } from './book-rivew-http.service';
import { Users } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private bookReview:BookRivewHttpService) { }

  signup(user:Users){
    return this.bookReview.postData('/signup',user);
  }


  login(endpoint: string, username: string, password: string): Promise<any> {
    let params = new HttpParams().set('username', username);
    params = params.append('password', password);
    const headers = new Map().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.bookReview.postData(endpoint, null, params, headers ).toPromise(); 
}

getUser(username:string){
  return this.bookReview.getData('/getUser/'+username);
}


}
