import { Component } from '@angular/core';
import {FeaturedProductCardComponent} from '../../components/featured-product-card/featured-product-card.component';
import {RecentProductCardComponent} from '../../components/recent-product-card/recent-product-card.component';
import {SHARED_IMPORTS} from '../../../../shared';
import {FilterMenuComponent} from '../../components/filter-menu/filter-menu.component';

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

export class HomePageComponent {

  // Variables para el filtro
  openFilterMenu= false;

  products: ProductCard[] = [
    new ProductCard('', 'La Molina', 'Cybertruck', 'Vehículos', 'Intercambio por una Laptop', 'S/ 1250 valor aprox.',""),
    new ProductCard('', 'Miraflores', 'Bicicleta Montañera', 'Deportes', 'Cambio por parlante JBL', 'S/ 850 valor aprox.',""),
    new ProductCard('', 'Surco', 'PlayStation 5', 'Tecnología', 'Acepto iPhone 11', 'S/ 2000 valor aprox.',""),
     new ProductCard('', 'San Isidro', 'Cámara Canon EOS', 'Fotografía', 'Por una tablet Android', 'S/ 1700 valor aprox.',""),
    new ProductCard('', 'Callao', 'Zapatillas Nike Air', 'Moda', 'Intercambio por smartwatch', 'S/ 600 valor aprox.',""),
    new ProductCard('', 'Barranco', 'Guitarra Eléctrica', 'Instrumentos', 'Acepto consola de juegos', 'S/ 900 valor aprox.',""),
    new ProductCard('', 'Jesús María', 'Monitor LG 4K', 'Tecnología', 'Cambio por silla gamer', 'S/ 1150 valor aprox.',""),
    new ProductCard('', 'San Borja', 'Moto Eléctrica', 'Vehículos', 'Acepto drones o cámaras', 'S/ 3200 valor aprox.',""),
    new ProductCard('', 'Pueblo Libre', 'Tablet Samsung Galaxy', 'Tecnología', 'Cambio por audífonos Bose', 'S/ 980 valor aprox.',""),
    new ProductCard('', 'Los Olivos', 'Sofá Recliner', 'Hogar', 'Acepto TV 40 pulgadas', 'S/ 1350 valor aprox.',"")
  ];

  onCallProductDetail() {
    // logica para ver detalles del producto
  }

  OnOpenFilterMenu() {
    this.openFilterMenu = !this.openFilterMenu;
  }

  onClickCloseMenu() {
    this.openFilterMenu = false;
  }
}

export class ProductCard {
  constructor(
    public imageUrl: string,
    public location: string,
    public title: string,
    public category: string,
    public exchangeItem: string,
    public estimatedPrice: string,
    public description: string,
  ) {}


}
