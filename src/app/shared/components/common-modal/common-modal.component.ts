import { Component, Input, input, InputSignal, Output } from '@angular/core';

@Component({
  selector: 'app-common-modal',
  imports: [],
  templateUrl: './common-modal.component.html',
  styleUrl: './common-modal.component.css'
})
export class CommonModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title!: string;
  @Input() content!: string;
  @Input() withCancel!: boolean;
  @Input() withConfirm!: boolean;

  @Output() onClose: () => void = () => {};
  @Output() onConfirm: () => void = () => {};
  @Output() onCancel: () => void = () => {};




}
