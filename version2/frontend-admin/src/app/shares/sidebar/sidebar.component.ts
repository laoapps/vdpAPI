import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() input_setSidebarState:any;

  constructor(private rout:Router) { }

  ngOnInit(): void {
    this.toggleDropdown();
  }

  logout(){
    localStorage.removeItem
    this.rout.navigate(['/auth'])
  }

  toggleDropdown():void {
    const menuItemDropdowns = document.querySelectorAll('.sidebar-menu-item.dropdown');
    const menuItemArrow = document.querySelectorAll(' .sidebar-menu-item-arrow');
    for (let i = 0; i < menuItemDropdowns.length; i++) {
      menuItemDropdowns[i].addEventListener('click', () => {
        menuItemArrow[i].classList.toggle('active');  
      });
    }
  }

}
