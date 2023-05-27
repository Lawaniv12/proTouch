import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CakeRoutingModule } from './cake-routing.module';
import { CakeComponent } from './cake.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CakeComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CakeRoutingModule,
    SharedModule,
    CarouselModule,
    ReactiveFormsModule
  ]
})
export class CakeModule { }
