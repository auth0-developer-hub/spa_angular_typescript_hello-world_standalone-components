import { Component } from '@angular/core';
import { NavBarTabComponent } from './nav-bar-tab.component';

@Component({
  standalone: true,
  imports: [NavBarTabComponent],
  selector: 'app-nav-bar-tabs',
  templateUrl: './nav-bar-tabs.component.html',
})
export class NavBarTabsComponent {}
