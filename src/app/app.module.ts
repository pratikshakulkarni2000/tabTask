import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabNgifComponent } from './tab-ngif/tab-ngif.component';
import { TabNgForComponent } from './tab-ng-for/tab-ng-for.component';
import { TabNgif2Component } from './tab-ngif2/tab-ngif2.component';
import { TabNgfor2Component } from './tab-ngfor2/tab-ngfor2.component';
import { TabNgif3Component } from './tab-ngif3/tab-ngif3.component';
import { TabNgif4Component } from './tab-ngif4/tab-ngif4.component';
import { TabNgif5Component } from './tab-ngif5/tab-ngif5.component';
import { TabSwitchComponent } from './tab-switch/tab-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TabNgifComponent,
    TabNgForComponent,
    TabNgif2Component,
    TabNgfor2Component,
    TabNgif3Component,
    TabNgif4Component,
    TabNgif5Component,
    TabSwitchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
