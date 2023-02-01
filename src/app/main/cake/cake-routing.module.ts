import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CakeComponent } from './cake.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: CakeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'about-cake', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CakeRoutingModule { }
