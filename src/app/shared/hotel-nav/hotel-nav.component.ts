import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hotel-nav',
  templateUrl: './hotel-nav.component.html',
  styleUrls: ['./hotel-nav.component.scss']
})
export class HotelNavComponent implements OnInit {
  navToggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let navbar = document.querySelector('.navbar') as HTMLElement;
    let body = document.querySelector('html') as HTMLElement;
    if (navbar != undefined) {
      if (body.scrollTop > navbar.clientHeight) {
        navbar.style.backgroundColor = '#EBF7FF';
        navbar.style.color = 'black';
      } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = '#FFFFFF';
      }
    }
  }

  showNavToggle(){
    this.navToggle = !this.navToggle
  }

  closeNavToggle(){
    this.navToggle = false
  }
}
