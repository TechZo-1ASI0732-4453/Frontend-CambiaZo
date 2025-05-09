import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Ong } from '../models/ong.model';
import { CategoryOng } from '../models/category-ong.model';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  private apiUrl = environment.apiUrl + '/donations';
  private http: HttpClient = inject(HttpClient);

  getOngs():Observable<Ong[]>{
    return this.http.get<Ong[]>(`${this.apiUrl}/ongs`);
  }

  getCategoriesOngs():Observable<CategoryOng[]>{
    return this.http.get<CategoryOng[]>(`${this.apiUrl}/category-ongs`);
  }

  getOngById(id: number): Observable<Ong> {
    return this.http.get<Ong>(`${this.apiUrl}/ongs/${id}`);
  }

}
