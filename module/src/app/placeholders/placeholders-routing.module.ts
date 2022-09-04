import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderHomeComponent } from './placeholder-home/placeholder-home.component';

const routes: Routes = [
  {path:"",component:PlaceholderHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceholdersRoutingModule { }
