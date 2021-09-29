import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';

import { DistrictRoutingModule } from './district-routing.module';
import { DistrictEditComponent } from './district-edit/district-edit.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictNewComponent } from './district-new/district-new.component';


@NgModule({
  declarations: [
    DistrictEditComponent,
    DistrictListComponent,
    DistrictNewComponent
  ],
  imports: [
    CommonModule,
    DistrictRoutingModule,
    FormsModule
  ]
})
export class DistrictModule { }
