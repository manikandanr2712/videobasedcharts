import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmChartsModule, AmChartsService } from '@amcharts/amcharts3-angular';
import { NewComponent } from './new/new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AmChartsModule
  ],
  providers: [
    AmChartsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
