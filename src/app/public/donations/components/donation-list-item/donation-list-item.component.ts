import { Component, input, InputSignal, Signal } from '@angular/core';
import { Ong } from '../../models/ong.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donation-list-item',
  imports: [RouterLink],
  templateUrl: './donation-list-item.component.html',
  styleUrl: './donation-list-item.component.css'
})
export class DonationListItemComponent {
  ong: InputSignal<Ong> = input.required();

}
