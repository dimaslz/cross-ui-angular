import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonComponent } from './button.component';
// import { CrossButton } from '@cross-ui/core';
// import { applyPolyfills } from '@cross-ui/core/loader';

// applyPolyfills().then(() => {
//   customElements.define('cui-button', CrossButton);
// });

@NgModule({
  declarations: [ButtonComponent],
  imports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ButtonComponent]
})
export class ButtonModule { }
