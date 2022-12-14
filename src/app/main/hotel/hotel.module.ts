import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HotelComponent,
    HotelHomeComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    SharedModule
  ]
})
export class HotelModule { }
