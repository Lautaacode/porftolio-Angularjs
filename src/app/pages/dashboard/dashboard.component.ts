import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from './services/activities.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private miactivities: ActivitiesService) { }

  ngOnInit(): void {
    this.miactivities.obtenerDatos()
    .pipe(
      tap(res => console.log(res))
    )
    .subscribe();
  }

}
