import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colors = ['primary', 'secondary', 'accent', 'danger', 'warning', 'success', 'info'];
}
