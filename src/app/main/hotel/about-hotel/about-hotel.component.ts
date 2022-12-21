import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-hotel',
  templateUrl: './about-hotel.component.html',
  styleUrls: ['./about-hotel.component.scss']
})
export class AboutHotelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  HotelStaffs = [
    {
      picture: 'assets/hotel/about-us/hotel-staff-2.jpg',
      name: 'Sunday Moses',
      description: 'Sunday is the bank manager with years of Experience.'
    },
    {
      picture: 'assets/hotel/about-us/hotel-staff-3.jpg',
      name: 'Abu Samuel',
      description: 'Sunday is the bank manager with years of Experience.'
    },
    {
      picture: 'assets/hotel/about-us/hotel-staff-4.jpg',
      name: 'Sandra Ade',
      description: 'Sunday is the bank manager with years of Experience.'
    },
    {
      picture: 'assets/hotel/about-us/hotel-staff-2.jpg',
      name: 'Sunday Moses',
      description: 'Sunday is the bank manager with years of Experience.'
    },
    {
      picture: 'assets/hotel/about-us/hotel-staff-3.jpg',
      name: 'Abu Samuel',
      description: 'Sunday is the bank manager with years of Experience.'
    },
    {
      picture: 'assets/hotel/about-us/hotel-staff-4.jpg',
      name: 'Sandra Ade',
      description: 'Sunday is the bank manager with years of Experience.'
    }
  ]

  Gallery = [
    {
      image: 'assets/hotel/about-us/executive-room.jpg'
    },
    {
      image: 'assets/hotel/about-us/reception.jpg'
    },
    {
      image: 'assets/hotel/about-us/royal-suite.jpg'
    },
    {
      image: 'assets/hotel/about-us/standard-room.jpg'
    },
    {
      image: 'assets/hotel/about-us/open-terrace-bar.jpg'
    },
    {
      image: 'assets/hotel/about-us/executive-suite.jpg'
    },
    {
      image: 'assets/hotel/about-us/lounge.jpg'
    },
    {
      image: 'assets/hotel/about-us/front-view.jpg'
    }
  ]
}
