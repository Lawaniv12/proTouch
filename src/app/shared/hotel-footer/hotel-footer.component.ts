import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-footer',
  templateUrl: './hotel-footer.component.html',
  styleUrls: ['./hotel-footer.component.scss']
})
export class HotelFooterComponent implements OnInit {
  date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
