import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/core';
import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet.component';
import { PageLayoutComponent } from 'src/app/shared/components/page-layout.component';

@Component({
  standalone: true,
  imports: [PageLayoutComponent, CodeSnippetComponent],
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  message = '';

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getAdminResource().subscribe((response) => {
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
