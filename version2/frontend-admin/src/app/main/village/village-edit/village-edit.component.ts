import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';

import { Router } from '@angular/router';
import { ProvinceService } from 'src/service/province.service';
import { DistrictService } from 'src/service/district.service';
import { VillageService } from 'src/service/village.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-village-edit',
  templateUrl: './village-edit.component.html',
  styleUrls: ['./village-edit.component.css']
})
export class VillageEditComponent implements OnInit {
  public province_list:Array<any> = [];
  public district_list:Array<any> = [];
  public vill_id=""
  public vill_name="";vill_name_en="";dr_id=""

  @Output() callFunctionLoadFromParent = new EventEmitter<any>();


  constructor(private p: ProvinceService,private d: DistrictService,private v: VillageService,private route: Router) { }

 ngOnInit(): void {
    // this.loadprovince()
    this.loaddistrict()
  }

  async loadvill(id:any){
    const data={
     vill_id:id  
    }

  this.v.listAllSbyvid(data).subscribe(res=>{
    this.vill_id=res.data[0].vill_id
    this.vill_name=res.data[0].vill_name
    this.vill_name_en=res.data[0].vill_name_en
    this.dr_id=res.data[0].dr_id
  });
}

 //  async loadprovince(){
  //   const data={
  //   }
  //    this.p.listAllprovince(data).subscribe(res=>{
  //         this.province_list = res.data
 
  //    });
  //  }
  async loaddistrict(){
    const data={
    }
     this.d.listAlldistrict(data).subscribe(res=>{
          this.district_list = res.data
        
                
     });
   }

  async update() {
    
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
        
        this.v.updatevillage(data).subscribe
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
                text: 'ຊື່ນີ້ມີແລ້ວ!',
              })
              
            }
          }, error => {
            console.log('add errror', error);
          })
    
      }
}
