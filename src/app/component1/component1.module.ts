import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1.component';
import { Nested1Component } from './nested1/nested1.component';
import { Nested2Component } from './nested2/nested2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Component1Component, Nested1Component, Nested2Component]
})
export class Component1Module { }
