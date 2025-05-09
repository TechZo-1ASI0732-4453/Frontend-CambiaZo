import { Component, HostListener } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarContentComponent} from './shared/components/navbar-content/navbar-content.component';
import { FooterContentComponent } from './shared/components/footer-content/footer-content.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavbarContentComponent,
    FooterContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @HostListener('window:beforeunload', ['$event'])
  clearCatIdOnReload() {
    localStorage.setItem('catId', '0');
  }
}
