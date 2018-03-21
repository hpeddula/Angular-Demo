import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  template: `
  <registration></registration><br>
  <report></report>
`,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input :string='Harsha';
}
