import { Component, OnInit ,ViewChild} from '@angular/core';

import { Router } from '@angular/router';
import { ProvinceService } from 'src/service/province.service';
import Swal from 'sweetalert2'
import { ProvinceEditComponent } from '../province-edit/province-edit.component';
import { PagingationService } from 'src/service/pagingation.service';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {

  public page:number=1
  public getpage:number
  public limit : number
  public keyword: string = ""
 
  public pr_name:string=""
  public pr_name_en:string=""
  public pr_id:string=""
  public count:string=""
 @ViewChild("edit",{static:false}) edit:ProvinceEditComponent


  public province_list:Array<any> = [];
  public btnList:any;

  constructor(private route:Router,private pageService:PagingationService,private ProvinceService:ProvinceService) { }


  ngOnInit(): void {
      this.loadprovince()
  }

  
  searchByid_name(e: KeyboardEvent) {
    this.pr_name_en = (e.target as HTMLInputElement).value
    this.pr_name = (e.target as HTMLInputElement).value
    this.pr_id = (e.target as HTMLInputElement).value
    const data={
      page:this.page,
      limit:this.limit,
      keyword:this.keyword,

      pr_name_en:this.pr_name_en,
      pr_name:this.pr_name,
      pr_id:this.pr_id
    }
      console.log(data);
      
  this.ProvinceService.listPageprovince_by(data).subscribe(res=>{
    console.log(res);

          this.province_list = res.data.rows
          this.count = res.data.count  
          const getPageTotal = Math.ceil(res.data.count / 2);
          this.btnList = this.pageService.pageingtations(data.page, getPageTotal);
          
  });
  }


  binddata(id:any,name:any,name_en:any){
    this.pr_id=id;
    this.pr_name=name;
    this.pr_name_en=name_en;
  }


  async loadprovince(){
    const data={
      page:this.page,
      limit:this.limit,
      keyword:this.keyword
    }

  this.ProvinceService.listPageprovince(data).subscribe(res=>{
   
          this.province_list = res.data.rows
          this.count = res.data.count
          const getPageTotal = Math.ceil(res.data.count / 2);
          this.btnList = this.pageService.pageingtations(data.page, getPageTotal);    
          console.log( this.btnList);
             
  });
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
  console.log('myid',data);
  const mydata={
    id:data
  }
  this.ProvinceService.deleteprovince(mydata).subscribe(res=>{

    if (res.status == 1) {
      console.log('delete data comming',res);
      Swal.fire(
        'ລຶບແລ້ວ!',
        'ການລຶບຂໍ້ມູນສຳເລັດ.',
        'success'
      )
      this.loadprovince()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'ອຸ້ຍ..!!!',
        text: 'ກະລຸນາກວດສອບຄວາມສຳພັນຂອງແຂວງກັບເມືອງ!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      console.log('status',res);
    }
  });
}

//==================================paging==========================================
clickPage(info:any)
{  
  // let p=info.page
  console.log(info);
  
  if(!this.pr_id && !this.pr_name && !this.pr_name_en){
    const data = {
      page:info,
      limit:this.limit
    }
    this.ProvinceService.listPageprovince(data).subscribe(res => {
      this.province_list = res.data.rows
      // const getPageTotal = Math.ceil(res.data.pageTotal / 5);
       const getPageTotal = Math.ceil(res.data.count / 2);
      this.count = res.data.count  

      this.btnList = this.pageService.pageingtations(data.page, getPageTotal);
      console.log( this.btnList);
});
  }else{
    const data={
      page:info,
      limit:this.limit,

      pr_name_en:this.pr_name_en,
      pr_name:this.pr_name,
      pr_id:this.pr_id
    }
      console.log(data);
      
  this.ProvinceService.listPageprovince_by(data).subscribe(res=>{
    console.log(res);

          this.province_list = res.data.rows
          this.count = res.data.count  
          const getPageTotal = Math.ceil(res.data.count / 3);
          this.btnList = this.pageService.pageingtations(data.page, getPageTotal);
          
  });
  } 
  
 
}
}
