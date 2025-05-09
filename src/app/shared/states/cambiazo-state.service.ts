import { inject, Injectable, input, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { ProductCategory } from '../models/product-category.model';
import { HttpClient } from '@angular/common/http';
import { HomeProductsService } from '../../public/home/services/home-products.service';
import { take } from 'rxjs';
import { LocationService } from '../services/location.service';
import { Country } from '../models/country.model';
import { Department } from '../models/department.model';
import { District } from '../models/district.model';

@Injectable({
  providedIn: 'root'
})
export class CambiazoStateService {

  productCategories: WritableSignal<ProductCategory[]> = signal([]);
  countries: WritableSignal<Country[]> = signal([]);
  departments: WritableSignal<Department[]> = signal([]);
  districts: WritableSignal<District[]> = signal([]);
  categorySaved: WritableSignal<number> = signal(0);
  homeProductsService: HomeProductsService = inject(HomeProductsService);
  locationService: LocationService = inject(LocationService);


  constructor() {
    this.homeProductsService
      .getProductCategories()
      .pipe(take(1))
      .subscribe((cats) => this.productCategories.set(cats));

    this.locationService.getCountries()
      .pipe(take(1))
      .subscribe((countries) => this.countries.set(countries));

    this.locationService.getDepartments()
      .pipe(take(1))
      .subscribe((departments) => this.departments.set(departments));
    
    this.locationService.getDistricts()
      .pipe(take(1))
      .subscribe((districts) => this.districts.set(districts));
    
  }


  setCategorySaved(categoryId:number){
    this.categorySaved.set(categoryId);
  }
}
