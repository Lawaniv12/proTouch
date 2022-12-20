import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HotelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  roomCategories = [
    {
      roomName: 'Standard Room',
      picture: 'assets/hotel/hotel-room-1.jpg'
    },
    {
      roomName: 'Family Room',
      picture: 'assets/hotel/hotel-room-2.jpg'
    },
    {
      roomName: 'Single Room',
      picture: 'assets/hotel/hotel-room-3.jpg'
    },
    {
      roomName: 'Delux Room',
      picture: 'assets/hotel/hotel-room-4.jpg'
    },
    {
      roomName: 'Luxury Room',
      picture: 'assets/hotel/hotel-room-5.jpg'
    },
    {
      roomName: 'Luxury Room',
      picture: 'assets/hotel/hotel-room-5.jpg'
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
    navText: ['<div class="absolute top-1/2 -translate-y-1/2 left-0 w-4 md:w-6 cursor-pointer"><img src="../../../assets/hotel/arrow-left.png" class="w-full" alt=""/></div>', '<div class="absolute top-1/2 -translate-y-1/2 right-0 w-4 md:w-6 cursor-pointer"><img src="../../../assets/hotel/arrow-right.png" class="w-full" alt="" /></div>'],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }
}
