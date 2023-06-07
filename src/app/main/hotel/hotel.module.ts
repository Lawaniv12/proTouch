import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RoomsComponent } from './rooms/rooms.component';
import { AboutHotelComponent } from './about-hotel/about-hotel.component';
import { ContactHotelComponent } from './contact-hotel/contact-hotel.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HotelComponent,
    
    RoomsComponent,
    AboutHotelComponent,
    ContactHotelComponent,
 
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    SharedModule,
    CarouselModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ]
})
export class HotelModule { }
