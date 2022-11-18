import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/routes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    importProvidersFrom(
      RouterModule.forRoot(ROUTES),
      HttpClientModule,
      AuthModule.forRoot({
        ...environment.auth0,
        httpInterceptor: {
          allowedList: [`${environment.api.serverUrl}/api/messages/admin`, `${environment.api.serverUrl}/api/messages/protected`],
        },
      }),
    ),
  ]
});
