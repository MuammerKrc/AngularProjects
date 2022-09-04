import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "placeholder", loadChildren: () => import("./placeholders/placeholders.module").then(i => i.PlaceholdersModule) },
  { path: "table", loadChildren: () => import("./tables/tables.module").then(i => i.TablesModule) },
  { path: "popus", loadChildren: () => import("./popups/popups.module").then(i => i.PopupsModule) },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
