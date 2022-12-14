import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';

import { HotelComponent } from './hotel.component';

const routes: Routes = [
  { 
    path: '', 
    component: HotelComponent,
    children: [
     {
      path: '',
      component: HotelHomeComponent
     },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
