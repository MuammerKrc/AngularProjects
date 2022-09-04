import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholderHomeComponent } from './placeholder-home/placeholder-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    PlaceholderHomeComponent,
    PlaceholderComponent,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlaceholdersRoutingModule,
  ],
  exports:[
  ]
})
export class PlaceholdersModule { }
