import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { LoginButtonComponent } from '../../buttons/login-button.component';
import { LogoutButtonComponent } from '../../buttons/logout-button.component';
import { SignupButtonComponent } from '../../buttons/signup-button.component';

@Component({
  standalone: true,
  imports: [CommonModule, SignupButtonComponent, LoginButtonComponent, LogoutButtonComponent],
  selector: 'app-nav-bar-buttons',
  templateUrl: './nav-bar-buttons.component.html',
})
export class NavBarButtonsComponent {
  private auth = inject(AuthService);
  isAuthenticated$ = this.auth.isAuthenticated$
}