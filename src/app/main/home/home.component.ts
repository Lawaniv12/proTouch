import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date = new Date()
  imagesStore = [
    {
      id: '1',
      src: 'assets/home/header-1.png'

    },
    {
      id: '2',
      src: 'assets/home/header-1.png'

    },
    {
      id: '3',
      src: 'assets/home/header-1.png'

    }
  ]
  imagesStore2 = [
    {
      id: '1',
      src: 'assets/home/header-2.png'

    },
    {
      id: '2',
      src: 'assets/home/header-2.png'

    },
    {
      id: '3',
      src: 'assets/home/header-2.png'

    }
  ]
  serviceCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 700,
    navText: ['<div class="bg-[#FFFEFE] w-32 cursor-pointer text-center text-[#E44200] py-2 px-3 text-sm">Previous</div>', '<div class="text-[#FFFEFE] w-32 cursor-pointer text-center bg-[#E44200] py-2 px-3 text-sm">Next</div> '],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
  hotelHeader: OwlOptions = {
    loop: true,
    
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 700,
    rtl: true,
    navText: ['<div class="bg-[#FFFEFE] w-32 cursor-pointer text-center text-[#E44200] py-2 px-3 text-sm">Previous</div>', '<div class="text-[#FFFEFE] w-32 cursor-pointer text-center bg-[#E44200] py-2 px-3 text-sm">Next</div> '],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false,
  }
  cakeHeader: OwlOptions = {
    loop: true,
    
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 700,
    navText: ['<div class="bg-[#FFFEFE] w-32 cursor-pointer text-center text-[#E44200] py-2 px-3 text-sm">Previous</div>', '<div class="text-[#FFFEFE] w-32 cursor-pointer text-center bg-[#E44200] py-2 px-3 text-sm">Next</div> '],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false
  }
  mobileHeader: OwlOptions = {
    loop: true,
    
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 700,
    navText: ['<div class="bg-[#FFFEFE] w-32 cursor-pointer text-center text-[#E44200] py-2 px-3 text-sm">Previous</div>', '<div class="text-[#FFFEFE] w-32 cursor-pointer text-center bg-[#E44200] py-2 px-3 text-sm">Next</div> '],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false
  }
  testimonialsCarousel: OwlOptions = {
    loop: true,
    
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 700,
    navText: ['<div class="absolute top-1/2 -translate-y-1/2 left-0 w-4 md:w-6 cursor-pointer"><img src="../../assets/home/arrow-left.png" class="w-full" alt="" /></div>', '<div class="absolute top-1/2 -translate-y-1/2 right-0 w-4 md:w-6 cursor-pointer"><img src="../../assets/home/arrow-right.png" class="w-full" alt="" /></div>'],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
}
