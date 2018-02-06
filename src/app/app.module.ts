import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Component1Module} from './component1/component1.module';
import {ServiceService} from './service3/service.service';
import { PipePipe } from './pipe4/pipe.pipe';
import { PipeExampleComponent } from './pipe4/pipe-example/pipe-example.component';
import { BuiltInPipesComponent } from './pipe4/build-in-pipes/build-in-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PipePipe,
    PipeExampleComponent,
    BuiltInPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Component1Module
  ],
  providers: [ServiceService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
