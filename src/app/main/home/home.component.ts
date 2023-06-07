import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AboutUsComponent } from 'src/app/shared/modal/about-us/about-us.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private matDialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      
      this.showAboutUs()
    },1500);
  }

  date = new Date()
  imagesStore = [
    {
      id: '1',
      src: 'assets/hotel/about-us/lounge.jpg'

    },
    {
      id: '2',
      src: 'assets/hotel/about-us/front-view.jpg'

    },
    {
      id: '3',
      src: 'assets/hotel/about-us/reception.jpg'

    },
 
  ]
  imagesStore2 = [
    {
      id: '1',
      src: 'assets/cake/footer-cake-1.svg'

    },
    {
      id: '2',
      src: 'assets/cake/footer-cake-2.svg'

    },
    {
      id: '3',
      src: 'assets/cake/footer-cake-3.svg'

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

  showAboutUs() {
    let openDialog = this.matDialog.open(AboutUsComponent, {
      panelClass: 'custom-class',
    });

    openDialog.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.router.navigateByUrl('/');
      }
    });
  }
}
