import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-header',
  templateUrl: './cake-header.component.html',
  styleUrls: ['./cake-header.component.scss']
})
export class CakeHeaderComponent implements OnInit {

  @Input() heading!: string
  @Input() paragraph!: string
  constructor() { }

  ngOnInit(): void {
  }

}
