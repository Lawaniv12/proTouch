import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CakeRoutingModule } from './cake-routing.module';
import { CakeComponent } from './cake.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CakeComponent
  ],
  imports: [
    CommonModule,
    CakeRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class CakeModule { }
