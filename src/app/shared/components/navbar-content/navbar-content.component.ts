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
  userId: string | null = null;

  constructor() {
    this.isLogged = localStorage.getItem('token') !== null;
    this.userId = localStorage.getItem('userId');
    console.log('isLogged:', this.isLogged);
    console.log('userId:', this.userId);
  }
  
  get isLoggedIn(): boolean {
    return this.isLogged;
  }

  get userIdValue(): string | null {
    return this.userId;
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  onCallCreatePost() {
    // lógica para publicar
  }
}
