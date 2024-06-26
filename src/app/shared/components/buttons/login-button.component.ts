import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="button__login" (click)="handleLogin()">Log In</button>
  `
})
export class LoginButtonComponent {

  private auth = inject(AuthService);

  handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  }

}