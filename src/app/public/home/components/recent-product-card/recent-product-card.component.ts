import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recent-product-card',
  imports: [],
  templateUrl: './recent-product-card.component.html',
  styleUrl: './recent-product-card.component.css'
})
export class RecentProductCardComponent {
  @Input() product: any;
}
