import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ClockComponent,
    WeatherComponent
  ],
  exports: [
    ClockComponent,
    WeatherComponent
  ]
})
export class WidgetsModule { }
