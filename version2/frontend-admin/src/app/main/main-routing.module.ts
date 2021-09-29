import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
// import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  // canActivate:[AuthGuard],
  {path:'',component:MainComponent,
      children: [
        { path:'province', loadChildren:() => import('./province/province.module').then(mode => mode.ProvinceModule) },
        { path:'district', loadChildren:() => import('./district/district.module').then(mode => mode.DistrictModule) },
        { path:'village', loadChildren:() => import('./village/village.module').then(mode => mode.VillageModule) }
      ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MainRoutingModule { }
