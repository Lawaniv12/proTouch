import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cakeTypeCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 700,
    navText: ['<div class="absolute left-0 top-1/2 -translate-y-1/2"><img src="assets/icons/left.png" class="w-full"></img></div>', '<div  class="absolute right-0 top-1/2 -translate-y-1/2"><img src="assets/icons/right.png" class="w-full"></img></div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      // 740: {
      //   items: 2
      // },
      940: {
        items: 3
      }
    },
    nav: true
  }

  testimonialCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 700,
    navText: ['<div class="absolute left-0 top-1/2 -translate-y-1/2"><img src="assets/icons/left.png" class="w-full"></img></div>', '<div  class="absolute right-0 top-1/2 -translate-y-1/2"><img src="assets/icons/right.png" class="w-full"></img></div>'],
    responsive: {
      0: {
        items: 1
      },
      // 400: {
      //   items: 2
      // },
      740: {
        items: 2
      },
      // 940: {
      //   items: 3
      // }
    },
    nav: true
  }

}
