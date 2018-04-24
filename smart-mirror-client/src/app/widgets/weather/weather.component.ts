import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './models/weather.model';
import { jsonWeatherToModel } from './mappers/weather.mapper';
import { environment } from '../../../environments/environment';
import { LoggerService } from '../../utils/logger/logger.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input('refreshRate')
  public WEATHER_REFRESH_RATE = 1000 * 60 * 30;
  @Input('city')
  public WEATHER_CITY = "Paris";
  @Input('units')
  public WEATHER_UNITS = "metric";
  @Input('apiKey')
  public WEATHER_API_KEY: string;
  @Input('apiUrl')
  private WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=';
  @Input('options')
  private WEATHER_API_OPTIONS = '&units=';

  private configuration: { [id: string]: string } = {};

  public weather: Weather;

  constructor(private httpClient: HttpClient, private loggerService: LoggerService) {}

  ngOnInit() {
    this.loadConf();

    this.httpClient
      .get(this.configuration['WEATHER_API_URL'] +
            this.configuration['WEATHER_API_KEY'] + "&q=" +
            this.configuration['WEATHER_CITY'] +
            this.configuration['WEATHER_API_OPTIONS'] +
            this.configuration['WEATHER_UNITS'])
      .subscribe((result) => {
        this.weather = jsonWeatherToModel(result);
      });

    setTimeout(() => {
      this.ngOnInit();
    }, this.WEATHER_REFRESH_RATE);
  }

  /**
   * The weather widget will always try to load your conf
   * from your environment file. If it cannot find a property in it,
   * it will try to load it from the component input.
   */
  private loadConf() {
    this.configuration['WEATHER_API_URL'] = environment['WEATHER_API_URL'] || this.WEATHER_API_URL;
    this.configuration['WEATHER_API_KEY'] = environment['WEATHER_API_KEY'] || this.WEATHER_API_KEY;
    this.configuration['WEATHER_CITY'] = environment['WEATHER_CITY'] || this.WEATHER_CITY;
    this.configuration['WEATHER_API_OPTIONS'] = environment['WEATHER_API_OPTIONS'] || this.WEATHER_API_OPTIONS;
    this.configuration['WEATHER_UNITS'] = environment['WEATHER_UNITS'] || this.WEATHER_UNITS;
    this.loggerService.get('Weather Widget').info('Loading weather widget with configuration :', this.configuration);
  }

}
