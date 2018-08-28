import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TramwayScheduleDTO } from './models/tram-schedule.model';
import { LocalDateTime } from 'js-joda';
import { environment } from '../../../environments/environment';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tram-schedule',
  templateUrl: './tram-schedule.component.html',
  styleUrls: ['./tram-schedule.component.scss']
})
export class TramScheduleComponent implements OnInit, OnDestroy {

  private readonly API_ENDPOINT = environment.SERVER_HOST + '/api/tram_schedule';

  public schedule: TramwayScheduleDTO;
  public isLoading = true;
  public isRefreshing = false;
  public TRAM_STOP_KEY = 'JACOUTWS';
  private intervalId;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchSchedule();
    this.intervalId = setInterval(() => this.fetchSchedule(), 1000 * 30);
  }

  ngOnDestroy(): void {

  }

  public fetchSchedule() {
    this.isRefreshing = true;
    this.httpClient.get(this.API_ENDPOINT).subscribe((tramwaySchedule: TramwayScheduleDTO) => {
      this.schedule = tramwaySchedule;
      this.isLoading = false;
      this.isRefreshing = false;
    });
  }

}
