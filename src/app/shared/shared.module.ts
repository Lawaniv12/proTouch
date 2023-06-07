import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CakeNavComponent } from './cake-nav/cake-nav.component';
import { CakeHeaderComponent } from './cake-header/cake-header.component';
import { CakeFooterComponent } from './cake-footer/cake-footer.component';
import { RouterModule } from '@angular/router';
import { HotelFooterComponent } from './hotel-footer/hotel-footer.component';
import { HotelNavComponent } from './hotel-nav/hotel-nav.component';
import { AboutUsComponent } from './modal/about-us/about-us.component';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    HeaderComponent,
    CakeNavComponent,
    CakeHeaderComponent,
    CakeFooterComponent,
    HotelFooterComponent,
    HotelNavComponent,
    AboutUsComponent,
    AlertComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HeaderComponent,
    CakeNavComponent,
    CakeHeaderComponent,
    CakeFooterComponent,
    HotelFooterComponent,
    HotelNavComponent,
    AboutUsComponent,
    AlertComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
