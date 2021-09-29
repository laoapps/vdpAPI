import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {APIService} from "./api.service";
@Injectable({
  providedIn: 'root'
})
export class AddressService extends APIService{
  public url: string = this.getBaseUrl();
  public token ='';

  getDistrict_by_provinceID(param:any):Observable<any> {
    const header = this.headerBase('listOne');
    return this.http.post(this.url + 'getDistrict_by_provinceID', param,{headers:header});
  }
  getVillage_by_districtID(param:any):Observable<any> {
    const header = this.headerBase('listOne');
    return this.http.post(this.url + 'getVillage_by_districtID', param,{headers:header});
  }
  listAllprovince(param:any):Observable<any> {
    const header = this.headerBase('listcatAll');
    return this.http.post(this.url + 'listAllprovince', param,{headers:header});
  }
 
}
