import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from "@auth0/auth0-angular";
import { PageLoaderComponent } from './shared';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, PageLoaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isAuth0Loading$ = this.authService.isLoading$;
  constructor(private authService: AuthService) {}
}
