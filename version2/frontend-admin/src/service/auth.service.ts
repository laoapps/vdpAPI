import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APIService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends APIService{
  public url: string = this.getBaseUrl();
  public token = '';


  login(param:any):Observable<any> {
    console.log(param);
    
    return this.http.post(this.url + 'Login', param);
  }
  adduser(param:any):Observable<any> {
    // const header = this.headerBase('adduser');
    return this.http.post(this.url + 'addUser', param);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
