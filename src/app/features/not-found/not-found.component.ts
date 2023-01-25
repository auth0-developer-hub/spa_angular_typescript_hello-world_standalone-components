import { Component } from '@angular/core';
import { PageLayoutComponent } from 'src/app/shared/components/page-layout.component';

@Component({
  standalone: true,
  imports: [PageLayoutComponent],
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
