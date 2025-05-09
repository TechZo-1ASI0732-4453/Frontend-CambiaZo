import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./public/home/pages/home-page/home-page.component').then(m => m.HomePageComponent)
  },
  { 
    path: 'sign-in',
    loadComponent: () => import('./auth/pages/sign-in/sign-in.component').then(m => m.SignInComponent)
  },
  { 
    path: 'sign-up',
    loadComponent: () => import('./auth/pages/sign-up/sign-up.component').then(m => m.SignUpComponent)
  },
  {
    path: 'donations',
    loadComponent: () => import('./public/donations/pages/donations-page/donations-page.component').then(m => m.DonationsPageComponent)
  },

];
