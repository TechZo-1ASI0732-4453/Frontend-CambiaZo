import { Component, inject } from '@angular/core';
import { DonationsService } from '../../services/donations.service';
import { switchMap } from 'rxjs';
import { DonationSideInfoComponent } from '../../components/donation-side-info/donation-side-info.component';
import { SHARED_IMPORTS } from '../../../../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donation-detail',
  imports: [DonationSideInfoComponent, SHARED_IMPORTS],
  templateUrl: './donation-detail.component.html',
  styleUrl: './donation-detail.component.css'
})
export class DonationDetailComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly donationsService: DonationsService = inject(DonationsService);
  
  public ong$ = this.route.params.pipe(
    switchMap(params => this.donationsService.getOngDetailsById(params['id']))
  );



}
