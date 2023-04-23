import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  roomCategories = [
    {
      roomName: 'Inside View',
      picture: 'assets/hotel/images/pic-1.jpg'
    },
    {
      roomName: 'Side View',
      picture: 'assets/hotel/images/side-view.jpg'
    },
    {
      roomName: 'Front View',
      picture: 'assets/hotel/images/front-view.jpg'
    },
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
}
