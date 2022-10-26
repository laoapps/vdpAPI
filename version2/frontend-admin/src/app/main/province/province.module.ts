import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ FormsModule } from '@angular/forms';

import { ProvinceRoutingModule } from './province-routing.module';
import { ProvinceEditComponent } from './province-edit/province-edit.component';
import { ProvinceListComponent } from './province-list/province-list.component';
import { ProvinceNewComponent } from './province-new/province-new.component';


@NgModule({
  declarations: [
    ProvinceEditComponent,
    ProvinceListComponent,
    ProvinceNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProvinceRoutingModule
  ]
})
export class ProvinceModule { }
