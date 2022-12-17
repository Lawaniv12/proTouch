import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-footer',
  templateUrl: './cake-footer.component.html',
  styleUrls: ['./cake-footer.component.scss']
})
export class CakeFooterComponent implements OnInit {
  date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
