import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-content',
  imports: [],
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
