import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from './components/button/button.module';

import { CrossButton } from '@cross-ui/core';
import { applyPolyfills } from '@cross-ui/core/loader';


applyPolyfills().then(() => {
  customElements.define('cui-button', CrossButton);
});

@NgModule({
  declarations: [],
  imports: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ButtonModule]
})
export class NgCrossUIModule { }
