import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cross-button',
  templateUrl: './button.component.html',
  styles: [
  ]
})
export class ButtonComponent implements OnInit {
  @Input() fullWidth: boolean = false;
  @Input() color: string = 'primary';
  @Input() size: string = 'medium';
  @Input() ui: string = 'simple';
  @Input() pill: boolean = false;
  @Input() outline: boolean = false;
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() circle: boolean = false;
  @Input() square: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
}
