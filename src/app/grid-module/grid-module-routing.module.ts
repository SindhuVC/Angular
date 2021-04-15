import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AgGridComponent } from './home-screen/ag-grid/ag-grid.component';
import { WellDataComponent } from './home-screen/well-data/well-data.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'wellInfo',
    component: WellDataComponent
  },
  {
    path: 'historicalData',
    component: AgGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridModuleRoutingModule { }
