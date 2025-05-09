import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {Observable} from 'rxjs';
import {Country} from '../../shared/models/country.model';
import {ProductDetail} from '../models/product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = environment.apiUrl;
  private readonly http:HttpClient = inject(HttpClient);

  getProductById(id : number): Observable<ProductDetail> {
    return this.http.get<ProductDetail>(`${this.apiUrl}/products/${id}`);
  }
}
