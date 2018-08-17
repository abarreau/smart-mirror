import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { WifiNameComponent } from './wifi-name/wifi-name.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { WifiNameService } from './wifi-name/wifi-name.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TramScheduleComponent } from './montpellier-tramway-schedule/tram-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FontAwesomeModule
  ],
  declarations: [
    ClockComponent,
    WeatherComponent,
    WifiNameComponent,
    TramScheduleComponent
  ],
  exports: [
    ClockComponent,
    WeatherComponent,
    WifiNameComponent,
    TramScheduleComponent
  ],
  providers: [
    WifiNameService
  ]
})
export class WidgetsModule { }
