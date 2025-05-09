import { Component, input, InputSignal } from '@angular/core';
import { OngDetails } from '../../models/ong.model';
import { SHARED_IMPORTS } from '../../../../shared';

@Component({
  selector: 'app-donation-side-info',
  imports: [SHARED_IMPORTS],
  templateUrl: './donation-side-info.component.html',
  styleUrl: './donation-side-info.component.css'
})
export class DonationSideInfoComponent {
  ong: InputSignal<OngDetails> = input.required<OngDetails>();
}
