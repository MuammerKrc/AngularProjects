import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopusHomeComponent } from './popus-home/popus-home.component';

const routes: Routes = [
  {path:'',component:PopusHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupsRoutingModule { }
