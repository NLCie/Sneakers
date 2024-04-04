import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RecupApiService } from './Services/recup-api.service';
import { InterceptorService } from './Interceptors/interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()
  ,{ provide: RecupApiService}, provideHttpClient(), { provide: InterceptorService}, 
  ]
};
