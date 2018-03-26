import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  template: `
  

  <app-auto></app-auto>
`,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input :string='Harsha';
}
