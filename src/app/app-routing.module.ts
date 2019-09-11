import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Nav1Component } from "./nav1/nav1.component";

const routes: Routes = [
  {
    path: '',
    component: Nav1Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
