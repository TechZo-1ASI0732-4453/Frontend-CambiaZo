import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Product, ProductCategory } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HomeProductsService {
  
  private apiUrl = environment.apiUrl;
  private readonly http: HttpClient = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductCategories(){
    return this.http.get<ProductCategory[]>(`${this.apiUrl}/product-categories`);
  }

}
