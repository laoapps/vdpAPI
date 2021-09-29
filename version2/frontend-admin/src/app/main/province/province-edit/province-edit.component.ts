import { Component, OnInit ,Input ,Output,EventEmitter,ViewChild} from '@angular/core';

import { Router } from '@angular/router';
import { ProvinceService } from "src/service/province.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-province-edit',
  templateUrl: './province-edit.component.html',
  styleUrls: ['./province-edit.component.css']
})
export class ProvinceEditComponent implements OnInit {
  @Input() pr_id: any
  @Input() pr_name: any
  @Input() pr_name_en: any
  @Output() callFunctionLoadFromParent = new EventEmitter<any>();
          

  constructor(private p: ProvinceService,private route: Router) { }

  ngOnInit(): void {

  }
  
  async update() {
    
        if(!this.pr_name){      
          Swal.fire({
            icon: 'error',
            title: 'ອຸ້ຍ..!!!',
            text: 'ກະລຸນາປ້ອນຊື່ແຂວງ!',
          })
          return;
        }
        const data = {
          pr_id: this.pr_id,
          pr_name : this.pr_name,
          pr_name_en: this.pr_name_en
          
        }
         console.log('data add',data);
    
    
        this.p.updateprovince(data).subscribe
          (res => {
            if (res.status == 1) {
              console.log('add data comming',res);
              Swal.fire(
                'ອັບເດດແລ້ວ!',
                'ການອັບເດດຂໍ້ມູນສຳເລັດ.',
                'success'
              )
              this.clear()
              this.callFunctionLoadFromParent.emit();
            } else {
              console.log('status',res);
              Swal.fire({
                icon: 'error',
                title: 'ອຸ້ຍ..!!!',
                text: 'ຊື່ສິນຄ້ານີ້ມີແລ້ວ!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
              
            }
          }, error => {
            console.log('add errror', error);
          })
    
      }
      clear(){
        // this.pr_name=""
        // this.pr_name_en=""
      }
}
