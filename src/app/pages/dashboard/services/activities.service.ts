import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activitie } from '../interfaces/activitie.interface';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiURL = 'http://localhost:3000'; 
  constructor(private http: HttpClient) {}

  obtenerDatos():Observable<Activitie[]>{
    return this.http.get<Activitie[]>(this.apiURL);
  }
}