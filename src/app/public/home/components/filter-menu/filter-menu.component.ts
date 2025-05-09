import {Component, Input, output, Output, OutputEmitterRef} from '@angular/core';
import {SHARED_IMPORTS} from '../../../../shared';

@Component({
  selector: 'app-filter-menu',
  imports: [SHARED_IMPORTS],
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.css'
})
export class FilterMenuComponent {

  closeOutput: OutputEmitterRef<boolean> = output();

  onClickMenu = () => this.closeOutput.emit(false);

}
