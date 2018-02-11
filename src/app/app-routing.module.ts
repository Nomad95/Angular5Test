import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Component1Component} from './component1/component1.component';
import {PipeExampleComponent} from './pipe4/pipe-example/pipe-example.component';
import {BuiltInPipesComponent} from './pipe4/build-in-pipes/build-in-pipes.component';
import {DirectiveExampleComponent} from './directive5/directive-example/directive-example.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form/template-driven-form.component';
import {FormBuilderComponent} from './reactive-form/form-builder/form-builder.component';
import {NestedMainComponent} from './nested6/nested-main/nested-main.component';
import {MainComponent} from './nested6/nested-main/main/main.component';
import {SecondaryComponent} from './nested6/nested-main/secondary/secondary.component';
import {LazyModuleModule} from './lazy7/lazy-module.module';
import {AuthGuardGuard} from './guards8/auth-guard.guard';

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
  },
  {
    path: 'directive/example',
    component: DirectiveExampleComponent
  },
  {
    path: 'form/template',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'form/reactive',
    component: FormBuilderComponent
  },
  {
    path: 'nested',
    component: NestedMainComponent,
    children: [
      {
        path: '', redirectTo: 'main', pathMatch: 'full'
      },
      {
        path: 'main', component: MainComponent
      },
      {
        path: 'secondary', component: SecondaryComponent, canActivate: [AuthGuardGuard]
      }
    ]
  },
  {
    path: 'lazy',
    loadChildren: './lazy7/lazy-module.module#LazyModuleModule'
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
