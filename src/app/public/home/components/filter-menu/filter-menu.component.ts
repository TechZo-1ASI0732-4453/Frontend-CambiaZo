import {Component, inject, Input, output, Output, OutputEmitterRef} from '@angular/core';
import {SHARED_IMPORTS} from '../../../../shared';
import {HomeProductsService} from '../../services/home-products.service';

@Component({
  selector: 'app-filter-menu',
  imports: [SHARED_IMPORTS],
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.css'
})
export class FilterMenuComponent {

  private readonly homeProductsService: HomeProductsService = inject(HomeProductsService);
  productCategories$ = this.homeProductsService.getProductCategories();
  selectedCategoryId: number = 0;

  closeOutput: OutputEmitterRef<boolean> = output();
  filterCategories: OutputEmitterRef<number> = output();

  onClickMenu = () => this.closeOutput.emit(false);
  onClickFilter = () => this.filterCategories.emit(this.selectedCategoryId);

  onSelectChanges(a: any):any {
    console.log(a);
  }

}
