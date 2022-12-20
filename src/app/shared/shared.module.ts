import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CakeNavComponent } from './cake-nav/cake-nav.component';
import { CakeHeaderComponent } from './cake-header/cake-header.component';
import { CakeFooterComponent } from './cake-footer/cake-footer.component';
import { RouterModule } from '@angular/router';
import { HotelFooterComponent } from './hotel-footer/hotel-footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CakeNavComponent,
    CakeHeaderComponent,
    CakeFooterComponent,
    HotelFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CakeNavComponent,
    CakeHeaderComponent,
    CakeFooterComponent,
    HotelFooterComponent
  ]
})
export class SharedModule { }
