import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InfinityTableComponent } from './infinity-table/infinity-table.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
{  path: '', component: LayoutComponent,
children: [
  { path: 'standard-table',  component: TableComponent},
  { path: 'infinity-table',  component: InfinityTableComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
