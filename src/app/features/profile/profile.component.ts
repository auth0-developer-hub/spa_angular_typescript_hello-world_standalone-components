import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfileModel } from '@app/core';
import { PageLayoutComponent } from 'src/app/shared/components/page-layout.component';
import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet.component';

@Component({
  standalone: true,
  imports: [CommonModule, PageLayoutComponent, CodeSnippetComponent],
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  title = 'Decoded ID Token';

  user$ = this.authService.user$;
  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2))); // the user property is null if there is no logged-in user. So either way, this component should only render if Auth0 has authenticated the user.

  constructor(private authService: AuthService) {}
}
