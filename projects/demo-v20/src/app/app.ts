import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightComponent } from '../../../../dist/ngx-highlight-text';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighlightComponent],
  template: `<h1>Demo v20 - ngx-highlight-text</h1>

<p highlight [content]="description" terms="Angular"></p>
<p highlight [content]="description" [terms]="['Angular','page']" color="cyan"></p>`
})
export class App {
  protected readonly title = signal('demo-v20');

  description = `Angular is an application-design framework and development platform for creating efficient and sophisticated
  single-page apps.

  These Angular docs help you learn and use the Angular framework and development platform, from your first application
  to optimizing complex single - page applications for enterprises.Tutorials and guides include downloadable examples to
  help you start your projects.`
}
