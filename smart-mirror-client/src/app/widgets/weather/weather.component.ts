import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input()
  public city = "Paris";

  @Input('api-key')
  public API_KEY: string; // TODO externaliser cette donnée
  private API_URL = "http://api.openweathermap.org/data/2.5/weather?appid=";

  public response: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient
      .get(this.API_URL + this.API_KEY + "&q=" + this.city)
      .subscribe((result) => {
        this.response = result;
      });
  }

}
