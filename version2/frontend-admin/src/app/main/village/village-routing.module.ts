import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillageListComponent } from './village-list/village-list.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'village-list' },
  { path:'village-list', component: VillageListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageRoutingModule { }
