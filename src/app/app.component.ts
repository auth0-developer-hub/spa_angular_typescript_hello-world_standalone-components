import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from "@auth0/auth0-angular";
import { PageLoaderComponent } from './shared';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, PageLoaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private auth = inject(AuthService);
  isAuth0Loading$ = this.auth.isLoading$;
}