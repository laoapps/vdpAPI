import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';

import { VillageRoutingModule } from './village-routing.module';
import { VillageEditComponent } from './village-edit/village-edit.component';
import { VillageListComponent } from './village-list/village-list.component';
import { VillageNewComponent } from './village-new/village-new.component';


@NgModule({
  declarations: [
    VillageEditComponent,
    VillageListComponent,
    VillageNewComponent
  ],
  imports: [
    CommonModule,
    VillageRoutingModule,
    FormsModule
  ]
})
export class VillageModule { }
