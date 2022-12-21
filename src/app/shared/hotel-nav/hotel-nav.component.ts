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
    let body = document.querySelector('body') as HTMLElement;
    if (navbar != undefined) {
      if (body.scrollTop > navbar.clientHeight) {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = '#F23A2E';
      } else {
        navbar.style.backgroundColor = '#EBF7FF';
        navbar.style.boxShadow = '0 0 2px #EBF7FF';
        navbar.style.color = 'black';
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
