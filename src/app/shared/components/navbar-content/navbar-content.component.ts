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

  isLogged = false;

  constructor() {
    this.isLogged = localStorage.getItem('token') !== null;
  }
  
  get isLoggedIn(): boolean {
    return this.isLogged;
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  onCallCreatePost() {
    // lógica para publicar
  }
}
