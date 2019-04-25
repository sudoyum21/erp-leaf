import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BiDashboardComponent } from './bi-dashboard/bi-dashboard.component';

export const BiRoutes: Routes = [
  { path: '', component: BiDashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(BiRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class BiRoutingModule { }