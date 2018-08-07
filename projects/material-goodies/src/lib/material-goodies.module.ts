import {NgModule} from '@angular/core';
import {InlineDialogComponent} from './inline-dialog/inline-dialog.component';
import {CommonModule} from "@angular/common";
import {MatButtonModule, MatDialogModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    InlineDialogComponent
  ],
  exports: [
    InlineDialogComponent
  ]
})
export class MaterialGoodiesModule { }
