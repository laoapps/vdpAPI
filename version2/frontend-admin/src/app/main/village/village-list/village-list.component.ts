import { Component, OnInit ,Input, Output,ViewChild} from '@angular/core';

import { Router } from '@angular/router';
import { VillageService } from 'src/service/village.service';
import Swal from 'sweetalert2'
import { VillageEditComponent } from '../village-edit/village-edit.component';

@Component({
  selector: 'app-village-list',
  templateUrl: './village-list.component.html',
  styleUrls: ['./village-list.component.css']
})
export class VillageListComponent implements OnInit {
  public page:number=1
  public limit : number=6
  public keyword: string = ""
  
  vill_id: string
  vill_name: string
  vill_name_en: string
  dr_name: string
  dr_name_en: string
  count: string

  public village_list:Array<any> = [];

  constructor(private route:Router,private v:VillageService) { }


  ngOnInit(): void {
      this.loadvill()
  }


  async loadvill(){
    const data={
      page:this.page,
      limit:this.limit,
      keyword:this.keyword
    }
  this.v.listPagevillage(data).subscribe(res=>{
          this.village_list = res.data.rows    
          this.count = res.data.count    
             
  });
}

searchByid_name(e: KeyboardEvent) {
  this.vill_name = (e.target as HTMLInputElement).value
  this.vill_name_en = (e.target as HTMLInputElement).value
  this.dr_name_en = (e.target as HTMLInputElement).value
  this.dr_name = (e.target as HTMLInputElement).value
  const data={
    page:this.page,
    limit:this.limit,
    keyword:this.keyword,

    vill_name:this.vill_name,
    vill_name_en:this.vill_name_en,
    dr_name:this.dr_name,
    dr_name_en:this.dr_name_en
  }
    
this.v.listPagevill_by(data).subscribe(res=>{


        this.village_list = res.data.rows
        
});
}

@ViewChild("N",{static:false}) N:VillageEditComponent

binddata(id:any){
  this.N.loadvill(id)
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
  vill_id:data
}
this.v.deletevillage(mydata).subscribe(res=>{

  if (res.status == 1) {
    Swal.fire(
      'ລຶບແລ້ວ!',
      'ການລຶບຂໍ້ມູນສຳເລັດ.',
      'success'
    )
    this.loadvill()
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
