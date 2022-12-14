import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'hotel',
      loadChildren: () =>
        import('./hotel/hotel.module').then(m => m.HotelModule)
    },
    {
      path: 'cake',
      loadChildren: () =>
        import('./cake/cake.module').then(m => m.CakeModule)
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
