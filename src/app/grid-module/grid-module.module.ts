import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModuleRoutingModule } from './grid-module-routing.module';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { WellDataComponent } from './well-data/well-data.component';



@NgModule({
  declarations: [
    AgGridComponent,
    WellDataComponent
  ],
  imports: [
    CommonModule,
    GridModuleRoutingModule
  ]
})
export class GridModuleModule { }
