import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  template: `
  

 <app-select></app-select>
`,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input :string='Harsha';
}
