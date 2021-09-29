import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceListComponent } from './province-list/province-list.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'province-list' },
  { path:'province-list', component: ProvinceListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvinceRoutingModule { }
