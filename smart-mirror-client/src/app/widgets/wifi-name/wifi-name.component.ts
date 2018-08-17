import { AfterViewInit, Component } from '@angular/core';
import { WifiNameService } from './wifi-name.service';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wifi-name',
  templateUrl: './wifi-name.component.html',
  styleUrls: ['./wifi-name.component.scss']
})
export class WifiNameComponent implements AfterViewInit {

  public wifiName: string;
  public wifiIcon = faWifi;

  constructor(private wifiNameService: WifiNameService) { }

  ngAfterViewInit() {
    this.wifiNameService.getWifiName().subscribe((wifi: any) => {
      this.wifiName = wifi.wifiName;
    });
  }

}
