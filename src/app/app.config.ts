import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RecupApiService } from './Services/recup-api.service';
import { InterceptorService } from './Interceptors/interceptor.service';
import { NgxsModule } from '@ngxs/store';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()
  ,{ provide: RecupApiService}, provideHttpClient(), { provide: InterceptorService}, 
  importProvidersFrom(NgxsModule.forRoot([]))
  ]
};
