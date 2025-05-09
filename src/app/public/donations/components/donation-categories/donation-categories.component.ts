import { Component, inject, output, OutputEmitterRef } from '@angular/core';
import { CategoryOng } from '../../models/category-ong.model';
import { Observable } from 'rxjs';
import { DonationsService } from '../../services/donations.service';
import { SHARED_IMPORTS } from '../../../../shared';

@Component({
  selector: 'app-donation-categories',
  imports: [SHARED_IMPORTS],
  templateUrl: './donation-categories.component.html',
  styleUrl: './donation-categories.component.css'
})
export class DonationCategoriesComponent {

  filters: OutputEmitterRef<number[]> = output();
  selectedCategories: number[] = [];
  private readonly categoriesOngsService: DonationsService = inject(DonationsService);
  public categoriesOngs$: Observable<CategoryOng[]>;


  constructor() {
    this.categoriesOngs$ = this.categoriesOngsService.getCategoriesOngs();
  }

  onFilterChange(categoryId: number, checked: boolean) {
    if (checked) {
      this.selectedCategories = [...this.selectedCategories, categoryId];
    } else {
      this.selectedCategories = this.selectedCategories.filter(id => id !== categoryId);
    }
  }

  onClearFilters = () => {
    this.selectedCategories = [];
    this.filters.emit([]);
  }

  onApplyFilters = () => this.filters.emit([...this.selectedCategories]);
}
