import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutHotelComponent } from './about-hotel/about-hotel.component';
import { ContactHotelComponent } from './contact-hotel/contact-hotel.component';
import { HotelComponent } from './hotel.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { 
    path: '', 
    component: HotelComponent,   
  },
  {
    path: 'rooms',
    component: RoomsComponent
   },
 
   {
    path: 'about-hotel',
    component: AboutHotelComponent
   },
   {
    path: 'contact',
    component: ContactHotelComponent 
   },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
