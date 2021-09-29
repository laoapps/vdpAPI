import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharesModule } from './../shares/shares.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
  CommonModule,
    MainRoutingModule,
    SharesModule
  ]
})
export class MainModule { }
