import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { LoginButtonComponent } from '../../buttons/login-button.component';
import { LogoutButtonComponent } from '../../buttons/logout-button.component';
import { SignupButtonComponent } from '../../buttons/signup-button.component';

@Component({
  standalone: true,
  imports: [CommonModule, SignupButtonComponent, LoginButtonComponent, LogoutButtonComponent],
  selector: 'app-mobile-nav-bar-buttons',
  templateUrl: './mobile-nav-bar-buttons.component.html',
})
export class MobileNavBarButtonsComponent {
  private auth = inject(AuthService);
  isAuthenticated$ = this.auth.isAuthenticated$
}