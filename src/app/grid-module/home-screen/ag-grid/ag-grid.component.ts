import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  href: string = '';
  columnDefs = [
    { field: 'MetricName' },
    { field: 'value' },
    { field: '24 hr avg' },
    { field: '24 hr min/max' },
    { field: '72 hr avg' },
    { field: '72 hr min/max' }

  ];

  rowData = [
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },
    { MetricName: 'Ad1 Voltage', value: '0', '24 hr avg': '0', '24 hr min/max': '0/0', '72 hr avg': '0', '72 hr min/max': '0/0' },

  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
  }

}
