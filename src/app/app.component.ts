import { Component, HostListener, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import {NavbarContentComponent} from './shared/components/navbar-content/navbar-content.component';
import { FooterContentComponent } from './shared/components/footer-content/footer-content.component';
import { filter } from 'rxjs';
import { CambiazoStateService } from './shared/states/cambiazo-state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NavbarContentComponent,
    FooterContentComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app-component';

  private readonly router: Router = inject(Router);
  private isSignInOrSignUp: boolean = false;

  constructor(private cambiazoStateService:CambiazoStateService){}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isSignInOrSignUp = this.router.url.includes('sign-in') || this.router.url.includes('sign-up');
    });
  }

  get isLogged(): boolean {
    return this.isSignInOrSignUp;
  }


  @HostListener('window:beforeunload', ['$event'])
  clearCatIdOnReload() {
    localStorage.setItem('catId', '0');
  }
}
