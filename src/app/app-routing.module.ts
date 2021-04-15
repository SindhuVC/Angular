import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/grid',
    pathMatch:'full'
  },
  {
    path: 'grid',
    loadChildren:() => import('./grid-module/grid-module.module').then(m => m.GridModuleModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
