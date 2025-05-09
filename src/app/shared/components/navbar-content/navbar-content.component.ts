import {Component, inject} from '@angular/core';
import {SHARED_IMPORTS} from '../../shared-imports';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-content',
  imports: [SHARED_IMPORTS],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.css'
})
export class NavbarContentComponent {

  openMenu = false;
  isLogged = false;
  private router:Router = inject(Router);

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
    this.router.navigate(['/publish']);
  }
  onCallLogin() {
    this.router.navigate(['/sign-in']);
  }
  onCallHome() {
    this.router.navigate(['/home']);
  }
}
