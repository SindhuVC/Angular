import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { GridModuleModule } from './grid-module.module';
import { WellDataComponent } from './well-data/well-data.component';

const routes: Routes = [

  {
    path:"",
    component:WellDataComponent
  },
  {
    path:"ag",
    component:AgGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridModuleRoutingModule { }
