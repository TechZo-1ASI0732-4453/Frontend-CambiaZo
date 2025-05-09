import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonationsService } from '../../services/donations.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-donation-detail',
  imports: [],
  templateUrl: './donation-detail.component.html',
  styleUrl: './donation-detail.component.css'
})
export class DonationDetailComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly donationsService: DonationsService = inject(DonationsService);
  
  public donation$ = this.route.params.pipe(
    switchMap(params => this.donationsService.getOngById(params['id']))
  );
}
