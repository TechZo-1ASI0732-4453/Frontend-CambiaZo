import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Country } from '../models/country.model';
import { Department } from '../models/department.model';
import { District } from '../models/district.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = environment.apiUrl;
  private readonly http:HttpClient = inject(HttpClient);

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/countries`);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/departments`);
  }

  getDistricts(): Observable<District[]> {
    return this.http.get<District[]>(`${this.apiUrl}/districts`);
  }

}
