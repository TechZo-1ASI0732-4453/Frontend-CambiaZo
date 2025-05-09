import {Component, input, Input, InputSignal} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-recent-product-card',
  imports: [],
  templateUrl: './recent-product-card.component.html',
  styleUrl: './recent-product-card.component.css'
})
export class RecentProductCardComponent {
  product: InputSignal<Product> = input.required()
}
