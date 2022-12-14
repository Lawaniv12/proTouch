import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeComponent } from './cake.component';

const routes: Routes = [{ path: '', component: CakeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CakeRoutingModule { }
