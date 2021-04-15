import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list'

import { GridModuleRoutingModule } from './grid-module-routing.module';
import { AgGridComponent } from './home-screen/ag-grid/ag-grid.component';
import { WellDataComponent } from './home-screen/well-data/well-data.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';



@NgModule({
  declarations: [
    AgGridComponent,
    WellDataComponent,
    HomeScreenComponent
  ],
  imports: [
    CommonModule,
    GridModuleRoutingModule,
    AgGridModule,
    AgGridModule.withComponents([]), 
    MatCardModule,
    MatListModule,
  ]
})
export class GridModuleModule { }
