import {Component, effect, inject, input, InputSignal, output, signal, Signal, WritableSignal} from '@angular/core';
import {FeaturedProductCardComponent} from '../../components/featured-product-card/featured-product-card.component';
import {RecentProductCardComponent} from '../../components/recent-product-card/recent-product-card.component';
import {SHARED_IMPORTS} from '../../../../shared';
import {FilterMenuComponent} from '../../components/filter-menu/filter-menu.component';
import {HomeProductsService} from '../../services/home-products.service';
import {AsyncPipe} from '@angular/common';
import {combineLatest, map, Observable} from 'rxjs';
import {Ong} from '../../../donations/models/ong.model';
import {toObservable} from '@angular/core/rxjs-interop';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-home-page',
  imports: [
    AsyncPipe,
    SHARED_IMPORTS,
    FeaturedProductCardComponent,
    RecentProductCardComponent,
    FilterMenuComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {


  productCategoryIdFilters: WritableSignal<number> = signal(0);

  private readonly homeProductsService: HomeProductsService = inject(HomeProductsService);
  public products$ = this.homeProductsService.getProducts();

  public filteredProducts$: Observable<Product[]> = combineLatest([
    this.products$,
    toObservable(this.productCategoryIdFilters)
  ]).pipe(
    map(([products, filters]) =>
      filters
        ? products.filter(p => p.productCategory.id === filters)
        : products
    )
  );

  // Variables para el filtro
  openFilterMenu= false;

  onCallProductDetail() {
    // logica para ver detalles del producto
  }

  OnOpenFilterMenu() {
    this.openFilterMenu = !this.openFilterMenu;
  }

  onClickCloseMenu() {
    this.openFilterMenu = false;
  }

  updateFilters(filters: number) {
    this.productCategoryIdFilters.update(() => filters);
    this.openFilterMenu = false;
    console.log(filters);
  }

  constructor() {
    effect(() => {
      const filters = this.productCategoryIdFilters();
      console.log(filters);
    });
  }
}


