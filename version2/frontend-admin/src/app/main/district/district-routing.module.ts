import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictListComponent } from './district-list/district-list.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'district-list' },
  { path:'district-list', component: DistrictListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
