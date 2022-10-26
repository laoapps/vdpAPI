import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  //username: binry  password: 123

  constructor(private Auth: AuthService,private route: Router) { }

  ngOnInit(): void {
  }



  async onLogin() {

    if(!this.username || !this.password){
      Swal.fire({
        icon: 'error',
        title: 'ອຸ້ຍ..!!!',
        text: 'ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ!',
      })
    return;
    }
    const data = {
      username: this.username,
      password: this.password
    }

    this.Auth.login(data).subscribe
      (res => {
        if (res.status == 1) {
          console.log('login data comming',res);
          this.route.navigate(['/main'])
          localStorage.setItem('token',res.data.token)
        } else {
          Swal.fire({
            icon: 'error',
            title: 'ອຸ້ຍ..!!!',
            text: 'ກະລຸນາກວດສອບ Username ຫຼື Password ຄືນໃໝ່ອີກຄັ້ງ!',
          })
            console.log('status',res);
            
            this.route.navigate([''])
          
        }
      }, error => {
        console.log('login errror', error);
      })

  }

  keyupGetusername(e: KeyboardEvent) {
    this.username = (e.target as HTMLInputElement).value
    console.log( this.username);
  }
  keyupGetpassword(e: KeyboardEvent) {
    this.password = (e.target as HTMLInputElement).value
    console.log( this.password);
  }
}
