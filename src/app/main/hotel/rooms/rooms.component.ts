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
}
