import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/routes';
import { environment } from './environments/environment';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(ROUTES),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
    provideAuth0({
      ...environment.auth0,
      httpInterceptor: {
        allowedList: [`${environment.api.serverUrl}/api/messages/admin`, `${environment.api.serverUrl}/api/messages/protected`],
      },
    })
  ]
});
