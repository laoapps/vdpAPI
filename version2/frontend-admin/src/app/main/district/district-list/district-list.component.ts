import { Component, OnInit ,Input, Output,ViewChild} from '@angular/core';

import { Router } from '@angular/router';
import { DistrictService } from 'src/service/district.service';
import Swal from 'sweetalert2'
import { DistrictEditComponent } from '../district-edit/district-edit.component';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {
  public page:number=1
  public limit : number=6
  public keyword: string = ""
  
  dr_id: string
  dr_name: string
  dr_name_en: string
  pr_name: string
  pr_name_en: string
  count: string

  public district_list:Array<any> = [];

  constructor(private route:Router,private d:DistrictService) { }


  ngOnInit(): void {
      this.loaddistrict()
  }


  async loaddistrict(){
    const data={
      page:this.page,
      limit:this.limit,
      keyword:this.keyword
    }
  this.d.listPagedistrict(data).subscribe(res=>{
          this.district_list = res.data.rows
          this.count=res.data.count    
             console.log("data",res);
             console.log("count", this.count);
             
  });
}

searchByid_name(e: KeyboardEvent) {
  this.dr_name = (e.target as HTMLInputElement).value
  this.dr_name_en = (e.target as HTMLInputElement).value
  this.pr_name = (e.target as HTMLInputElement).value
  this.pr_name_en = (e.target as HTMLInputElement).value
  const data={
    page:this.page,
    limit:this.limit,
    keyword:this.keyword,

    dr_name:this.dr_name,
    dr_name_en:this.dr_name_en,
    pr_name:this.pr_name,
    pr_name_en:this.pr_name_en
  }
    
this.d.listPagedis_by(data).subscribe(res=>{


        this.district_list = res.data.rows
        this.count=res.data.count  
        console.log("data1",this.count);
        
        
        
});
}

@ViewChild("N",{static:false}) N:DistrictEditComponent

binddata(id:any){
  this.N.loaddistrict(id)
}


async  remove(data:any){
Swal.fire({
  title: 'ຕ້ອງການລຶບແທ້ບໍ່?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'ຕົກລົງ, ລຶບມັນເລີຍ!'
}).then((result) => {
  if (result.isConfirmed) {
    this.delete(data);
  }
})
}

async delete(data:any){
const mydata={
  dr_id:data
}
this.d.deletedistrict(mydata).subscribe(res=>{

  if (res.status == 1) {
    Swal.fire(
      'ລຶບແລ້ວ!',
      'ການລຶບຂໍ້ມູນສຳເລັດ.',
      'success'
    )
    this.loaddistrict()
  } else {
    Swal.fire({
      icon: 'error',
      title: 'ອຸ້ຍ..!!!',
      text: 'ກະລຸນາກວດສອບຄວາມສຳພັນຂອງສິນຄ້າ!',
    })

  }
});
}
}
