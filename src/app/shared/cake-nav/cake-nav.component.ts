import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-nav',
  templateUrl: './cake-nav.component.html',
  styleUrls: ['./cake-nav.component.scss']
})
export class CakeNavComponent implements OnInit {
  navToggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showNavToggle(){
    this.navToggle = !this.navToggle
  }
  closeNavToggle(){
    this.navToggle = false
  }

}
