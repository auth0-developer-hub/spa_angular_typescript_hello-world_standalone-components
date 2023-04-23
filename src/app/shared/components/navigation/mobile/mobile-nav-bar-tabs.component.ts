import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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

  isAuthenticated$ = this.auth.isAuthenticated$;

  constructor(private auth: AuthService) {}

  onMobileNavBarTabClick(path: string): void {
    this.mobileNavBarTabClick.emit(path);
  }
}
