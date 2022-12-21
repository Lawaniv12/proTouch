import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-events',
  templateUrl: './hotel-events.component.html',
  styleUrls: ['./hotel-events.component.scss']
})
export class HotelEventsComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  hotelEvents = [
    {
      picture: 'assets/hotel/hotel-room-1.jpg',
      title: 'Lorem Ipsum debat',
      description: 'Dec 8th, 2020. By Admin',
      body: 'the moment we discover our hotel had a chance, we launched with one goal only and that is to reach a myriad of people per day. '

    },

    {
      picture: 'assets/hotel/hotel-room-1.jpg',
      title: 'Lorem Ipsum debat',
      description: 'Dec 8th, 2020. By Admin',
      body: 'the moment we discover our hotel had a chance, we launched with one goal only and that is to reach a myriad of people per day. '

    },
    {
      picture: 'assets/hotel/hotel-room-1.jpg',
      title: 'Lorem Ipsum debat',
      description: 'Dec 8th, 2020. By Admin',
      body: 'the moment we discover our hotel had a chance, we launched with one goal only and that is to reach a myriad of people per day. '

    },

  ]
}
