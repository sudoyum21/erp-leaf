import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiDashboardComponent } from './bi-dashboard/bi-dashboard.component';
import { BiRoutingModule } from './bi-routing.module';

@NgModule({
  declarations: [BiDashboardComponent],
  imports: [
    CommonModule,
    BiRoutingModule
  ]
})
export class BiModule { }
