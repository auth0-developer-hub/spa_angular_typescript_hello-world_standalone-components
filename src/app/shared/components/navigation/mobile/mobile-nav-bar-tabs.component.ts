import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MobileNavBarTabComponent } from './mobile-nav-bar-tab.component';

@Component({
  standalone: true,
  imports: [CommonModule, MobileNavBarTabComponent],
  selector: 'app-mobile-nav-bar-tabs',
  templateUrl: './mobile-nav-bar-tabs.component.html',
})
export class MobileNavBarTabsComponent {
  @Output() mobileNavBarTabClick = new EventEmitter<string>();

  private auth = inject(AuthService);
  isAuthenticated$ = this.auth.isAuthenticated$;


  onMobileNavBarTabClick(path: string): void {
    this.mobileNavBarTabClick.emit(path);
  }
}