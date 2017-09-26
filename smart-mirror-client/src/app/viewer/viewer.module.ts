import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer/viewer.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule
  ],
  declarations: [ViewerComponent],
  exports: [ ViewerComponent ]
})
export class ViewerModule { }
