import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Component1Component} from './component1/component1.component';
import {PipeExampleComponent} from './pipe4/pipe-example/pipe-example.component';
import {BuiltInPipesComponent} from './pipe4/build-in-pipes/build-in-pipes.component';

const routes: Routes = [
  {
    path: 'component',
    component: Component1Component
  },
  {
    path: 'pipe/example',
    component: PipeExampleComponent
  },
  {
    path: 'pipe/built',
    component: BuiltInPipesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
