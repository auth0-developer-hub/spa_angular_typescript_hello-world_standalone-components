import { Component } from '@angular/core';
import { NavBarComponent } from './navigation/desktop/nav-bar.component';
import { MobileNavBarComponent } from './navigation/mobile/mobile-nav-bar.component';
import { PageFooterComponent } from './page-footer.component';

@Component({
  standalone: true,
  imports: [NavBarComponent, MobileNavBarComponent, PageFooterComponent],
  selector: 'app-page-layout',
  template: `
    <div class="page-layout">
      <app-nav-bar></app-nav-bar>
      <app-mobile-nav-bar></app-mobile-nav-bar>
      <div class="page-layout__content">
        <ng-content></ng-content>
      </div>
      <app-footer></app-footer>
    </div>
  `,
})
export class PageLayoutComponent {}
