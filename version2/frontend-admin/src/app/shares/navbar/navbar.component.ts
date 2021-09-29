import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public setSidebarState:boolean = false;
  @Output() output_setSidebarState:any = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.animateToggleNavbar();
    this.toggleDropdown();
  }

  animateToggleSidebar():void {
    if (this.setSidebarState == true) {
      this.setSidebarState = false;
      this.output_setSidebarState.emit(false);
    }
    else {
      this.setSidebarState = true;
      this.output_setSidebarState.emit(true);
    }
  }

  animateToggleNavbar():void {
    const navbarNavigationSmall = document.querySelector('.navbar-navigation-small');
    const toggleSidebar = document.querySelector('.toggle-sidebar-small');
    toggleSidebar?.addEventListener('click', () => {
      navbarNavigationSmall?.classList.toggle('active');
    });
  }

  toggleDropdown():void {
    const menuItemDropdowns = document.querySelectorAll('.navbar-menu-item.dropdown');
    const menuItemArrow = document.querySelectorAll('.navbar-menu-item-arrow');
    for (let i = 0; i < menuItemDropdowns.length; i++) {
      menuItemDropdowns[i].addEventListener('click', () => {
        menuItemArrow[i].classList.toggle('active');  
      });
    }
  }

}
