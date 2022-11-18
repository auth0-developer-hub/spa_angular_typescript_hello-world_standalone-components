import { Component } from '@angular/core';
import { Auth0FeaturesComponent } from 'src/app/shared/components/auth0-features.component';
import { HeroBannerComponent } from 'src/app/shared/components/hero-banner.component';
import { PageLayoutComponent } from 'src/app/shared/components/page-layout.component';

@Component({
  standalone: true,
  imports: [PageLayoutComponent, HeroBannerComponent, Auth0FeaturesComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
