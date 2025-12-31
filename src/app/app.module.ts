import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabNgifComponent } from './tab-ngif/tab-ngif.component';
import { TabNgForComponent } from './tab-ng-for/tab-ng-for.component';
import { TabNgif2Component } from './tab-ngif2/tab-ngif2.component';

@NgModule({
  declarations: [
    AppComponent,
    TabNgifComponent,
    TabNgForComponent,
    TabNgif2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
