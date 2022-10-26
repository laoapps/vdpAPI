import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';

import { Router } from '@angular/router';
import { ProvinceService } from 'src/service/province.service';
import { DistrictService } from 'src/service/district.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-district-edit',
  templateUrl: './district-edit.component.html',
  styleUrls: ['./district-edit.component.css']
})
export class DistrictEditComponent implements OnInit {
  public province_list:Array<any> = [];
  public dr_id=""
  public dr_name="";dr_name_en="";pr_id=""

  @Output() callFunctionLoadFromParent = new EventEmitter<any>();


  constructor(private p: ProvinceService,private d: DistrictService,private route: Router) { }

 ngOnInit(): void {
    this.loadprovince()
  }

  async loaddistrict(id:any){
    const data={
     dr_id:id  
    }

  this.d.listAllSbydid(data).subscribe(res=>{
    this.dr_id=res.data[0].dr_id
    this.dr_name=res.data[0].dr_name
    this.dr_name_en=res.data[0].dr_name_en
    this.pr_id=res.data[0].pr_id
  });
}

  async loadprovince(){
    const data={
    }
     this.p.listAllprovince(data).subscribe(res=>{
          this.province_list = res.data
 
     });
   }
 

  async update() {
    
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
        
        this.d.updatedistrict(data).subscribe
          (res => {
            if (res.status == 1) {
            
              Swal.fire(
                'ອັບເດດແລ້ວ!',
                'ການອັບເດດຂໍ້ມູນສຳເລັດ.',
                'success'
              )
              this.callFunctionLoadFromParent.emit();
            } else {
            
              Swal.fire({
                icon: 'error',
                title: 'ອຸ້ຍ..!!!',
                text: 'ຊື່ສິນຄ້ານີ້ມີແລ້ວ!',
              })
              
            }
          }, error => {
            console.log('add errror', error);
          })
    
      }
}
