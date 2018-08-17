import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tram-schedule',
  templateUrl: './tram-schedule.component.html',
  styleUrls: ['./tram-schedule.component.scss']
})
export class TramScheduleComponent implements OnInit {

  private readonly API_ENDPOINT = 'http://data.montpellier3m.fr/sites/default/files/ressources/TAM_MMM_TpsReel.csv';


  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get(this.API_ENDPOINT).pipe(
      map((response) => {
        console.log(response);
      }))
      .subscribe();
  }

}
