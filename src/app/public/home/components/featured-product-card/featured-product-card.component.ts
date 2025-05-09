import {Component, input, Input, InputSignal} from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-featured-product-card',
  imports: [NzCardModule,NzButtonModule],
  templateUrl: './featured-product-card.component.html',
  styleUrl: './featured-product-card.component.css'
})
export class FeaturedProductCardComponent {

  product: InputSignal<Product> = input.required();
}
