import {Component, inject, output, OutputEmitterRef} from '@angular/core';
import {SHARED_IMPORTS} from '../../../../shared';
import {HomeProductsService} from '../../services/home-products.service';
import { CambiazoStateService } from '../../../../shared/states/cambiazo-state.service';

@Component({
  selector: 'app-filter-menu',
  imports: [SHARED_IMPORTS],
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.css'
})
export class FilterMenuComponent {

  private readonly cambiazoStateService: CambiazoStateService = inject(CambiazoStateService);

  productCategories = this.cambiazoStateService.productCategories;
  selectedCategoryId: number = this.cambiazoStateService.categorySaved();

  closeOutput: OutputEmitterRef<boolean> = output();
  filterCategories: OutputEmitterRef<number> = output();


  onClickMenu = () => this.closeOutput.emit(false);
  onClickFilter = () => {
    const id = this.selectedCategoryId;
    this.cambiazoStateService.setCategorySaved(id);
    this.selectedCategoryId = id;
    this.filterCategories.emit(id);
  }
}
