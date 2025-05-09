import {Component, Input} from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-featured-product-card',
  imports: [NzCardModule,NzButtonModule],
  templateUrl: './featured-product-card.component.html',
  styleUrl: './featured-product-card.component.css'
})
export class FeaturedProductCardComponent {
  @Input() product: any;
}
