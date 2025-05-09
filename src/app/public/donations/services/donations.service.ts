import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Ong, OngDetails } from '../models/ong.model';
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

  getOngDetailsById(id: number): Observable<OngDetails> {
    return this.http.get<OngDetails>(`${this.apiUrl}/ongs/${id}/details`);
  }

}
