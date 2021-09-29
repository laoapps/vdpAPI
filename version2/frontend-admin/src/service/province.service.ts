import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {APIService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProvinceService extends APIService{
  public url: string = this.getBaseUrl();
  public token ='';

  addprovince(param:any):Observable<any> {
    const header = this.headerBase('add');
    return this.http.post(this.url + 'addprovince', param,{headers:header});
  }
  listAllprovince(param:any):Observable<any> {
    const header = this.headerBase('listAll');
    return this.http.post(this.url + 'listAllprovince', param,{headers:header});
  }
  getAutoIDprovince(param:any):Observable<any> {
    const header = this.headerBase('getAutoID');
    return this.http.post(this.url + 'getAutoIDprovince', param,{headers:header});
  }
  listPageprovince(param:any):Observable<any> {
    const header = this.headerBase('listPage');
    return this.http.post(this.url + 'listPageprovince', param,{headers:header});
  }
  deleteprovince(param:any):Observable<any> {
    const header = this.headerBase('delete');
    return this.http.post(this.url + 'deleteprovince', param,{headers:header});
  }
  updateprovince(param:any):Observable<any> {
    const header = this.headerBase('update');
    return this.http.post(this.url + 'updateprovince', param,{headers:header});
  }
  listPageprovince_by(param:any):Observable<any> {
    const header = this.headerBase('listOne');
    return this.http.post(this.url + 'listPageprovince_by', param,{headers:header});
  }
}
