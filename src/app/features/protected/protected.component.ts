import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/core';
import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet.component';
import { PageLayoutComponent } from 'src/app/shared/components/page-layout.component';

@Component({
  standalone: true,
  imports: [PageLayoutComponent, CodeSnippetComponent],
  selector: 'app-protected',
  templateUrl: './protected.component.html',
})
export class ProtectedComponent implements OnInit {
  message = '';

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getProtectedResource().subscribe((response) => {
      const { data, error } = response;

      if (data) {
        this.message = JSON.stringify(data, null, 2);
      }

      if (error) {
        this.message = JSON.stringify(error, null, 2);
      }
    });
  }
}
