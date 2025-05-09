import {Component, computed, effect, inject, input, InputSignal, OnInit, output, signal, Signal, WritableSignal} from '@angular/core';
import {FeaturedProductCardComponent} from '../../components/featured-product-card/featured-product-card.component';
import {RecentProductCardComponent} from '../../components/recent-product-card/recent-product-card.component';
import {SHARED_IMPORTS} from '../../../../shared';
import {FilterMenuComponent} from '../../components/filter-menu/filter-menu.component';
import {HomeProductsService} from '../../services/home-products.service';
import {AsyncPipe} from '@angular/common';
import {combineLatest, map, Observable, take} from 'rxjs';
import {toObservable} from '@angular/core/rxjs-interop';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home-page',
  imports: [
    SHARED_IMPORTS,
    FeaturedProductCardComponent,
    RecentProductCardComponent,
    FilterMenuComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent implements OnInit{


  productCategoryIdFilters: WritableSignal<number> = signal(0);
  isLoggedIn: Signal<boolean> = signal(localStorage.getItem('token') !== null);
  showLoginModal: WritableSignal<boolean> = signal(false);
  products: WritableSignal<Product[]> = signal([]);  

  private readonly homeProductsService: HomeProductsService = inject(HomeProductsService);

  ngOnInit(): void {
    this.homeProductsService.getProducts().pipe(take(1)).subscribe((response: Product[]) => {
      this.products.set(response);
    });
  }

    filteredProducts = computed(() => {
      const categoryId = this.productCategoryIdFilters();
      const all = this.products();            // lee la signal
      return categoryId !== 0
        ? all.filter(p => p.productCategory.id === +categoryId)
        : all;                                // muestra todos si es 0
    });


  onClickProductCard(productId: number) {
    if(this.isLoggedIn()) {
      console.log('Logeado accede');
    }else{
      this.showLoginModal.set(true);
      console.log('No logeado no accede');
    }
  }

  openFilterMenu= false;

  OnOpenFilterMenu() {
    this.openFilterMenu = !this.openFilterMenu;
  }

  onClickCloseMenu() {
    this.openFilterMenu = false;
  }

  updateFilters(id: number) {
    this.productCategoryIdFilters.set(+id);
    this.openFilterMenu = false;
  }

  constructor() {
    effect(() => {
      const filters = this.productCategoryIdFilters();
    });
  }
}


