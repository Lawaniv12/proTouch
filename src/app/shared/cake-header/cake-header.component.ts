import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-header',
  templateUrl: './cake-header.component.html',
  styleUrls: ['./cake-header.component.scss']
})
export class CakeHeaderComponent implements OnInit {

  @Input() heading!: string
  @Input() paragraph!: string
  @Input() overRideClass!: boolean;
  @Input() customClass!: string
  constructor() { }

  ngOnInit(): void {
  }

  get getCustomClass(): string {
    return this.overRideClass ? this.customClass: '';
  }

}
