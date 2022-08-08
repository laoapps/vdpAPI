import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class APIService {
  constructor(public http: HttpClient) {
  }
  protected getBaseUrl(): string {
    //  return 'http://192.168.1.122:8080/inventory-management/sign-in';
    //  return 'http://localhost:9599/inventory/';
  
    return 'https://vdp-api.laoapps.com/';
    // return location.protocol + '//' + location.host+'/api/';
  
  }

  protected   headerBase(m:string=""): any {
    const token = localStorage.getItem('token');
    
    const myheader = new HttpHeaders({ 'Content-Type': 'application/json'})
    .set('token', token+'');
    return myheader;
  }
}