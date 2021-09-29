import { Component, OnInit,Output ,EventEmitter} from '@angular/core';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProvinceService } from 'src/service/province.service';
import { DistrictService } from 'src/service/district.service';

@Component({
  selector: 'app-district-new',
  templateUrl: './district-new.component.html',
  styleUrls: ['./district-new.component.css']
})
export class DistrictNewComponent implements OnInit {
  public province_list:Array<any> = [];
  public dr_id=""
  public dr_name="";dr_name_en="";pr_id=""
  @Output() callFunctionLoadFromParent = new EventEmitter<any>();

   constructor(private p: ProvinceService,private d: DistrictService,private route: Router) { }

  ngOnInit(): void {
   this.loadprovince()
    this.GetAutoID()
  }

  async GetAutoID(){
    
    const data={
     
    }
  this.d.getAutoIDdistrict(data).subscribe(res=>{
          
    if(res.data[0].dr_id == null){
       this.dr_id ="0"
    }else{
       this.dr_id =res.data[0].dr_id 
    }
      //  this.getID=this.getID.substring(1)
       let num=parseInt(this.dr_id)
       num+=1
       this.dr_id=num.toString() 
  });
}

   async loadprovince(){
    const data={
    }
     this.p.listAllprovince(data).subscribe(res=>{
          this.province_list = res.data
 
     });
   }

   async add() {
    if(!this.dr_name || !this.pr_id){      
      Swal.fire({
        icon: 'error',
        title: 'ອຸ້ຍ..!!!',
        text: 'ກະລຸນາປ້ອນຂໍ້ມູນໃນຊ່ອງທີ່ມີໝາຍ *',
      }) 
      return;
    }
    const data = {
      dr_id: this.dr_id,
      dr_name: this.dr_name,
      dr_name_en: this.dr_name_en,
      pr_id: this.pr_id
    }

    this.d.adddistrict(data).subscribe
      (res => {
        if (res.status == 1) {
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
      this.dr_name=""
      this.dr_name_en=""
      this.pr_id=""
  }
}
