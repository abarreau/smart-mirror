import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WifiNameService {

  public static readonly SERVER_HOST = "http://localhost";
  public static readonly SERVER_PORT = "8080";
  public static readonly API_URL = "/api/wifi";

  constructor(private httpClient: HttpClient) { }

  public getWifiName(): Observable<any> {
    return this.httpClient.get(WifiNameService.SERVER_HOST + ":"
      + WifiNameService.SERVER_PORT + "/" + WifiNameService.API_URL);
  }

}
