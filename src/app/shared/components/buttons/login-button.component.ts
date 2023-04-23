import { Component } from '@angular/core';
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

  constructor(private auth: AuthService) {}

  handleLogin(): void {
    /* Add User Login to Angular */
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile', /* If you don't specify this appState.returnTo option, your users will be redirected by default to the / path after they log in. */
        // returnTo: '/profile' // Note, may be the same as "target"
      },
    });
  }
}
