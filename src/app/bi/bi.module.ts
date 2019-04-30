import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiDashboardComponent } from './bi-dashboard/bi-dashboard.component';
import { BiRoutingModule } from './bi-routing.module';
import { ChartDataService } from './bi-dashboard/chart-data-service';

@NgModule({
  declarations: [BiDashboardComponent],
  imports: [
    CommonModule,
    BiRoutingModule
  ],
  providers: [ChartDataService]
})
export class BiModule { }
