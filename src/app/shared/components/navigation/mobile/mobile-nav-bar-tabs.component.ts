import { Component, EventEmitter, Output } from '@angular/core';
import { MobileNavBarTabComponent } from './mobile-nav-bar-tab.component';

@Component({
  standalone: true,
  imports: [MobileNavBarTabComponent],
  selector: 'app-mobile-nav-bar-tabs',
  templateUrl: './mobile-nav-bar-tabs.component.html',
})
export class MobileNavBarTabsComponent {
  @Output() mobileNavBarTabClick = new EventEmitter<string>();

  onMobileNavBarTabClick(path: string): void {
    this.mobileNavBarTabClick.emit(path);
  }
}
