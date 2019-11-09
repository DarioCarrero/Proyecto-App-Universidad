import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facultad } from '../dtos/Facultad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/universidad/facultades';

  getFacultades(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(this.Url);
  }
}
