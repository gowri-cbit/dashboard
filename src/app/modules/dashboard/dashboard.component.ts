import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
bigChart = [];
cards = [];
pieCharts = [];
  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {
this.bigChart = this.dashboardservice.bigChart();
this.cards = this.dashboardservice.cards();
this.pieCharts = this.dashboardservice.pieCharts();
  }

}
