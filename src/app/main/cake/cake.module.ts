import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CakeRoutingModule } from './cake-routing.module';
import { CakeComponent } from './cake.component';


@NgModule({
  declarations: [
    CakeComponent
  ],
  imports: [
    CommonModule,
    CakeRoutingModule
  ]
})
export class CakeModule { }
