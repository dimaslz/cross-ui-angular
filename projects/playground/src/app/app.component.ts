import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colors = ['primary', 'secondary', 'accent', 'danger', 'warning', 'success', 'info'];

  onClick($event: any) {
    console.log("onClick")
  }

  onBlur($event: any) {
    console.log("onBlur")
  }
}
