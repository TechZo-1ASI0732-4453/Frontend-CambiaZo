import {Component, inject} from '@angular/core';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  private readonly productsService: ProductsService = inject(ProductsService);

}
