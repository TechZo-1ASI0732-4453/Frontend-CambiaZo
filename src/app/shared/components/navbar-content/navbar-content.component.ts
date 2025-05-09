import { Component } from '@angular/core';
import {SHARED_IMPORTS} from '../../shared-imports';

@Component({
  selector: 'app-navbar-content',
  imports: [SHARED_IMPORTS],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.css'
})
export class NavbarContentComponent {
  openMenu = false;

  constructor() {}

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  onCallCreatePost() {
    // lógica para publicar
  }
}
