import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment.development';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {ErrorInterceptor} from './core/interceptors/error-response.interceptor';
import {AuthInterceptor} from './core/interceptors/auth.interceptor';
import {TokenInterceptor} from './core/interceptors/token.interceptor';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { icons } from './icons-provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNzIcons(icons),
    provideHttpClient(withFetch(), withInterceptors([ErrorInterceptor, AuthInterceptor, TokenInterceptor])),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ]
};
