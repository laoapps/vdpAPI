import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public setSidebarState:any;

  constructor() { }

  ngOnInit(): void {

  }

  animateToggleSidebar(e:boolean):void {
    this.setSidebarState = e;
    let appMainRight = document.querySelector('.app-main-right');
    if (e == true) {
      appMainRight?.classList.add('full');
    }
    else {
      appMainRight?.classList.remove('full');
    }
  }

}
