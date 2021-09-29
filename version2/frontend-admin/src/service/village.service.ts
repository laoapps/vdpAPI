import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {APIService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class VillageService extends APIService{
  public url: string = this.getBaseUrl();
  public token ='';

  addvillage(param:any):Observable<any> {
    const header = this.headerBase('add');
    return this.http.post(this.url + 'addvillage', param,{headers:header});
  }
  listAllvillage(param:any):Observable<any> {
    const header = this.headerBase('listAll');
    return this.http.post(this.url + 'listAllvillage', param,{headers:header});
  }
  getAutoIDvillage(param:any):Observable<any> {
    const header = this.headerBase('getAutoID');
    return this.http.post(this.url + 'getAutoIDvillage', param,{headers:header});
  }
  listPagevillage(param:any):Observable<any> {
    const header = this.headerBase('listPage');
    return this.http.post(this.url + 'listPagevillage', param,{headers:header});
  }
  deletevillage(param:any):Observable<any> {
    const header = this.headerBase('delete');
    return this.http.post(this.url + 'deletevillage', param,{headers:header});
  }
  updatevillage(param:any):Observable<any> {
    const header = this.headerBase('update');
    return this.http.post(this.url + 'updatevillage', param,{headers:header});
  }
  listPagevill_by(param:any):Observable<any> {
    const header = this.headerBase('listOne');
    return this.http.post(this.url + 'listPagevill_by', param,{headers:header});
  }
  getVillage_by_districtID(param:any):Observable<any> {
    const header = this.headerBase('getVillage_by_id');
    return this.http.post(this.url + 'getVillage_by_districtID', param,{headers:header});
  }
  listAllSbyvid(param:any):Observable<any> {
    const header = this.headerBase('listbyvid');
    return this.http.post(this.url + 'listAllSbyvid', param,{headers:header});
  }
}
