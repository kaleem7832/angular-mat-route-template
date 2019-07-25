import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//here import the required components for routing.
import {Test1Component} from './test1/test1.component';

const routes: Routes = [
  {
    path: 'test1',
    component: Test1Component
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }