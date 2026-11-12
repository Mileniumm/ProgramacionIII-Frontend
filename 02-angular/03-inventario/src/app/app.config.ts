import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

// para que currency muestre $ 9.600 y no $9,600
registerLocaleData(localeEsAr);

// no tengo zone.js, en angular 22 ya viene zoneless por defecto
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // con withComponentInputBinding el :id de la ruta me llega como input en el componente
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(), // lo usan httpResource y rxResource
    { provide: LOCALE_ID, useValue: 'es-AR' },
  ],
};
