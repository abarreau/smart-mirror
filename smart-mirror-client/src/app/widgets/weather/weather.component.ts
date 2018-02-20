import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './models/weather.model';
import { jsonWeatherToModel } from './mappers/weather.mapper';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  public city = "Paris";

  @Input()
  public units = "metric";

  @Input('api-key')
  public API_KEY: string; // TODO externaliser cette donnée
  private API_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=';
  private API_OPTIONS = '&units=';

  public weather: Weather;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient
      .get(this.API_URL + this.API_KEY + "&q=" + this.city + this.API_OPTIONS + this.units)
      .subscribe((result) => {
        this.weather = jsonWeatherToModel(result);
      });
  }

}
