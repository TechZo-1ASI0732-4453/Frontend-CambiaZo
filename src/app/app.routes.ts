import { Routes } from '@angular/router';
import {SignInComponent} from './auth/pages/sign-in/sign-in.component';
import {SignUpComponent} from './auth/pages/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: '**', redirectTo: 'home' }
];
