import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cake', loadChildren: () => import('./cake/cake.module').then(m => m.CakeModule) }, { path: 'hotel', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
