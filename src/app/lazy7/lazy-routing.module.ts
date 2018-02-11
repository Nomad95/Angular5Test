import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LazyComponentComponent} from './lazy-component/lazy-component.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyRoutingModule { }
