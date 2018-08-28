import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class WifiNameService {

  public static readonly SERVER_HOST = "http://localhost";
  public static readonly SERVER_PORT = "8080";
  public static readonly API_URL = "api/wifi";

  constructor(private httpClient: HttpClient) { }

  public getWifiName(): Observable<any> {
    return this.httpClient.get(environment.SERVER_HOST + '/' + WifiNameService.API_URL);
  }

}
