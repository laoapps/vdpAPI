import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {APIService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class DistrictService extends APIService{
  public url: string = this.getBaseUrl();
  public token ='';

  adddistrict(param:any):Observable<any> {
    const header = this.headerBase('add');
    return this.http.post(this.url + 'adddistrict', param,{headers:header});
  }
  listAlldistrict(param:any):Observable<any> {
    const header = this.headerBase('listAll');
    return this.http.post(this.url + 'listAlldistrict', param,{headers:header});
  }
  getAutoIDdistrict(param:any):Observable<any> {
    const header = this.headerBase('getAutoID');
    return this.http.post(this.url + 'getAutoIDdistrict', param,{headers:header});
  }
  listPagedistrict(param:any):Observable<any> {
    const header = this.headerBase('listPage');
    return this.http.post(this.url + 'listPagedistrict', param,{headers:header});
  }
  deletedistrict(param:any):Observable<any> {
    const header = this.headerBase('delete');
    return this.http.post(this.url + 'deletedistrict', param,{headers:header});
  }
  updatedistrict(param:any):Observable<any> {
    const header = this.headerBase('update');
    return this.http.post(this.url + 'updatedistrict', param,{headers:header});
  }
  listPagedis_by(param:any):Observable<any> {
    const header = this.headerBase('listOne');
    return this.http.post(this.url + 'listPagedis_by', param,{headers:header});
  }
  getDistrict_by_provinceID(param:any):Observable<any> {
    const header = this.headerBase('listOne');
    return this.http.post(this.url + 'getDistrict_by_provinceID', param,{headers:header});
  }
  listAllSbydid(param:any):Observable<any> {
    const header = this.headerBase('listOne');
    return this.http.post(this.url + 'listAllSbydid', param,{headers:header});
  }
}
