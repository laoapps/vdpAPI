import { Component, OnInit,Output ,EventEmitter} from '@angular/core';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProvinceService } from 'src/service/province.service';
import { AddressService } from 'src/service/address.service';
import { VillageService } from 'src/service/village.service';

@Component({
  selector: 'app-village-new',
  templateUrl: './village-new.component.html',
  styleUrls: ['./village-new.component.css']
})
export class VillageNewComponent implements OnInit {
  public province_list:Array<any> = [];
  public district_list:Array<any> = [];
  public vill_id=""
  public vill_name="";vill_name_en="";dr_id="";pr_id=""
  @Output() callFunctionLoadFromParent = new EventEmitter<any>();

   constructor(private p: ProvinceService,private address: AddressService,private v: VillageService,private route: Router) { }

  ngOnInit(): void {
    this.loadprovince()
    this.loaddistrict()
    this.GetAutoID()
  }

  async GetAutoID(){
    
    const data={
     
    }
  this.v.getAutoIDvillage(data).subscribe(res=>{
          console.log(res);
          
    if(res.data[0].vill_id == null){
       this.vill_id ="0"
    }else{
       this.vill_id =res.data[0].vill_id 
    }
      //  this.getID=this.getID.substring(1)
       let num=parseInt(this.vill_id)
       num+=1
       this.vill_id=num.toString() 
  });
}

   async loadprovince(){
    const data={
    }
     this.p.listAllprovince(data).subscribe(res=>{
          this.province_list = res.data
 
     });
   }
   async loaddistrict(){
    const data={
      pr_id:this.pr_id
    }
     this.address.getDistrict_by_provinceID(data).subscribe(res=>{
          this.district_list = res.data
 
     });
   }

   async add() {
    if(!this.vill_name || !this.dr_id){      
      Swal.fire({
        icon: 'error',
        title: 'ອຸ້ຍ..!!!',
        text: 'ກະລຸນາປ້ອນຂໍ້ມູນໃນຊ່່ອງທີ່ມີໝາຍ * ໃຫ້ຄົບ!',
      }) 
      return;
    }
    const data = {
      vill_id: this.vill_id,
      vill_name: this.vill_name,
      vill_name_en: this.vill_name_en,
      dr_id: this.dr_id
    }

    this.v.addvillage(data).subscribe
      (res => {
        if (res.status == 1) {
          console.log('add data comming',res);
          Swal.fire(
            'ເພີ່ມແລ້ວ!',
            'ການເພີ່ມຂໍ້ມູນສຳເລັດ.',
            'success'
          )
          this.GetAutoID()
          this.callFunctionLoadFromParent.emit()
          this.clear()
        } else {
          console.log('status',res);
          Swal.fire({
            icon: 'error',
            title: 'ອຸ້ຍ..!!!',
            text: 'ຊື່ນີ້ມີແລ້ວ!',
         
          })

       
        }
      }, error => {
        console.log('add errror', error);
      })

  }
  clear(){
      this.vill_name=""
      this.vill_name_en=""
      this.dr_id=""
  }
}
