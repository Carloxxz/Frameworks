import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(HttpClientXsrfModule),
    provideHttpClient(withFetch()),
  ]
}