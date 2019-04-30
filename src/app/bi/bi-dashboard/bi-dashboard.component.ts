
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ChartDataService } from './chart-data-service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bi-dashboard',
  templateUrl: './bi-dashboard.component.html',
  styleUrls: ['./bi-dashboard.component.css']
})
export class BiDashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('charts') public chartEl: ElementRef;

  constructor(private hcs: ChartDataService) {

  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnDestroy() {

  }

  createChart() {
    this.hcs.loadData("ATVI", (symbol, data) => {
      this.hcs.createChart(this.chartEl.nativeElement, symbol, data);
    });
  }

}
