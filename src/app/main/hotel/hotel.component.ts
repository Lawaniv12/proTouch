import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HotelComponent implements OnInit {

  constructor() { }
 

  ngOnInit(): void {
    this.showWhatsAppLink();
  }

  roomCategories = [
    {
      roomName: 'Executive Room',
      picture: 'assets/hotel/about-us/executive-room.jpg'
    },
    {
      roomName: 'Standard Room',
      picture: 'assets/hotel/about-us/standard-room.jpg'
    },
    {
      roomName: 'Executive Suite',
      picture: 'assets/hotel/about-us/executive-suite.jpg'
    },
    {
      roomName: 'Royal Suite',
      picture: 'assets/hotel/about-us/royal-suite.jpg'
    },
    {
      roomName: 'Open Terrace Bar',
      picture: 'assets/hotel/about-us/open-terrace-bar.jpg'
    },
    {
      roomName: 'Reception',
      picture: 'assets/hotel/about-us/reception.jpg'
    },
  ]

  imagesStore = [
    {
      id: '1',
      src: 'assets/hotel/header1.png'

    },
    {
      id: '2',
      src: 'assets/hotel/header2.png'

    },
    {
      id: '3',
      src: 'assets/hotel/header3.png'

    }
  ]

  showWhatsAppLink(){
   const whatsAppContainer = document.querySelector('.whatsAppContainer');
   const header = document.querySelector('#header') as HTMLElement;

   window.addEventListener('scroll', () => {
    if  (header && window.scrollY  > header.offsetHeight) {
      whatsAppContainer?.classList.remove('hidden');
    }
    else {
      whatsAppContainer?.classList.add('hidden')
    }
   })
  }

  hotelHeader: OwlOptions = {
    loop: true,
    
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 400,
    autoplay: true,
    autoplaySpeed: 400,
    navText: ['<div class="bg-[#FFFEFE] w-32 cursor-pointer text-center text-[#E44200] py-2 px-3 text-sm">Previous</div>', '<div class="text-[#FFFEFE] w-32 cursor-pointer text-center bg-[#E44200] py-2 px-3 text-sm">Next</div> '],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false,
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
    navText: ['<div class="absolute top-1/2 -translate-y-1/2 left-0 w-4 md:w-10 cursor-pointer"><img src="../../../assets/hotel/left-arrow.png" class="w-full" alt=""/></div>', '<div class="absolute top-1/2 -translate-y-1/2 right-0 w-4 md:w-10 cursor-pointer"><img src="../../../assets/hotel/right-arrow.png" class="w-full" alt="" /></div>'],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

 
}

