import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialGoodiesModule} from "material-goodies";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MaterialGoodiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
