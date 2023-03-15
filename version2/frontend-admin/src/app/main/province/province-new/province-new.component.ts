import { Component, OnInit,Output ,EventEmitter} from '@angular/core';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProvinceService } from 'src/service/province.service';

@Component({
  selector: 'app-province-new',
  templateUrl: './province-new.component.html',
  styleUrls: ['./province-new.component.css']
})
export class ProvinceNewComponent implements OnInit {
  
  @Output() callFunctionLoadFromParent = new EventEmitter<any>();

  public  pr_id :string="";
  public pr_name: string="";
  public pr_name_en: string="";
  
  constructor(private p: ProvinceService,private route: Router) { }

  ngOnInit(): void {
    this.GetAutoID()
  }

  async GetAutoID(){
    
    const data={
     
    }
  this.p.getAutoIDprovince(data).subscribe(res=>{
          
    if(res.data[0].pr_id == null){
       this.pr_id ="0"
    }else{
       this.pr_id =res.data[0].pr_id
    }
       let num=parseInt(this.pr_id)
       num+=1
       this.pr_id=num.toString()  
  });
}


  async add() {
    if(!this.pr_name){      
      Swal.fire({
        icon: 'error',
        title: 'ອຸ້ຍ..!!!',
        text: 'ກະລຸນາປ້ອນຊື່ແຂວງ!',
      })
      return;
    }
    
    const data = {
      pr_id:this.pr_id,
      pr_name: this.pr_name,
      pr_name_en: this.pr_name_en
    }

    this.p.addprovince(data).subscribe
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
            text: 'ຊື່ຊ້ຳກັນ!',   
          })

       
        }
      }, error => {
        console.log('add errror', error);
      })

  }

  clear(){
    this.pr_name="";
    this.pr_name_en="";
  }
}
