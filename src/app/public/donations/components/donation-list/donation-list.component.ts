import { Component, effect, inject, input, InputSignal } from '@angular/core';
import { DonationsService } from '../../services/donations.service';
import { Ong } from '../../models/ong.model';
import { combineLatest, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';
import { DonationListItemComponent } from '../donation-list-item/donation-list-item.component';

@Component({
  selector: 'app-donation-list',
  imports: [AsyncPipe, DonationListItemComponent],
  templateUrl: './donation-list.component.html',
  styleUrl: './donation-list.component.css'
})
export class DonationListComponent{
  categoryOngIdFilters: InputSignal<number[]> = input.required();

  private readonly donationsService: DonationsService=inject(DonationsService);
  public ongs$: Observable<Ong[]> = this.donationsService.getOngs();

  public filteredOngs$: Observable<Ong[]> = combineLatest([
    this.ongs$,
    toObservable(this.categoryOngIdFilters)
  ]).pipe(
    map(([ongs, filters]) =>
      filters.length
        ? ongs.filter(o => filters.includes(o.categoryOngId))
        : ongs
    )
  );

  constructor(){
    effect(()=>{
      const filtros = this.categoryOngIdFilters();
      console.log(filtros);
    });
  }


}
