import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WifiNameService } from './wifi-name.service';

@Component({
  selector: 'app-wifi-name',
  templateUrl: './wifi-name.component.html',
  styleUrls: ['./wifi-name.component.css']
})
export class WifiNameComponent implements AfterViewInit {

  public wifiName: string;

  constructor(private wifiNameService: WifiNameService) { }

  ngAfterViewInit() {
    this.wifiNameService.getWifiName().subscribe((wifi: any) => {
      this.wifiName = wifi.wifiName;
    });
  }

}
