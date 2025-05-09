import { Component } from '@angular/core';
import { DonationListComponent } from "../../components/donation-list/donation-list.component";
import { DonationCategoriesComponent } from "../../components/donation-categories/donation-categories.component";

@Component({
  selector: 'app-donations-page',
  imports: [DonationListComponent, DonationCategoriesComponent],
  templateUrl: './donations-page.component.html',
  styleUrl: './donations-page.component.css'
})
export class DonationsPageComponent {
  constructor() { }
  
  filterCategories: number[] = [];

  onFilterChange = (categories: number[]) => {
    this.filterCategories = categories;
  }
}
