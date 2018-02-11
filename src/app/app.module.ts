import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Component1Module} from './component1/component1.module';
import {ServiceService} from './service3/service.service';
import { PipePipe } from './pipe4/pipe.pipe';
import { PipeExampleComponent } from './pipe4/pipe-example/pipe-example.component';
import { BuiltInPipesComponent } from './pipe4/build-in-pipes/build-in-pipes.component';
import { SomeDirectiveDirective } from './directive5/some-directive.directive';
import { DirectiveExampleComponent } from './directive5/directive-example/directive-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form/template-driven-form.component';
import { FormBuilderComponent } from './reactive-form/form-builder/form-builder.component';
import { ServiceExampleComponent } from './service3/service-example/service-example.component';
import { NestedMainComponent } from './nested6/nested-main/nested-main.component';
import { MainComponent } from './nested6/nested-main/main/main.component';
import { SecondaryComponent } from './nested6/nested-main/secondary/secondary.component';
import { LazyComponentComponent } from './lazy7/lazy-component/lazy-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PipePipe,
    PipeExampleComponent,
    BuiltInPipesComponent,
    SomeDirectiveDirective,
    DirectiveExampleComponent,
    TemplateDrivenFormComponent,
    FormBuilderComponent,
    ServiceExampleComponent,
    NestedMainComponent,
    MainComponent,
    SecondaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Component1Module,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
