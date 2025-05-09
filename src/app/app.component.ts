import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { NavbarContentComponent } from "./shared/components/navbar-content/navbar-content.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cambiazo-Frontend';
}
