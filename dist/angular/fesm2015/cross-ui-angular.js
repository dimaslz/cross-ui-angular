import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CrossButton } from '@cross-ui/core';
import { applyPolyfills } from '@cross-ui/core/loader';

class ButtonComponent {
    constructor() {
        this.fullWidth = false;
        this.color = 'blue';
        this.size = 'medium';
        this.ui = 'simple';
        this.pill = false;
        this.type = 'button';
        this.disabled = false;
        this.circle = false;
        this.square = false;
    }
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'cross-button',
                template: "<cui-button\n  [fullWidth]=\"fullWidth\"\n  [color]=\"color\"\n  [type]=\"type\"\n  [size]=\"size\"\n  [disabled]=\"disabled\"\n  [ui]=\"ui\"\n  [square]=\"square\"\n  [circle]=\"circle\"\n  [pill]=\"pill\"\n>\n  <ng-content></ng-content>\n</cui-button>"
            },] }
];
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    fullWidth: [{ type: Input }],
    color: [{ type: Input }],
    size: [{ type: Input }],
    ui: [{ type: Input }],
    pill: [{ type: Input }],
    type: [{ type: Input }],
    disabled: [{ type: Input }],
    circle: [{ type: Input }],
    square: [{ type: Input }]
};

// import { CrossButton } from '@cross-ui/core';
// import { applyPolyfills } from '@cross-ui/core/loader';
// applyPolyfills().then(() => {
//   customElements.define('cui-button', CrossButton);
// });
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonComponent],
                imports: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [ButtonComponent]
            },] }
];

applyPolyfills().then(() => {
    customElements.define('cui-button', CrossButton);
});
class NgCrossUIModule {
}
NgCrossUIModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                // schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [ButtonModule]
            },] }
];

/*
 * Public API Surface of angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule, NgCrossUIModule };
//# sourceMappingURL=cross-ui-angular.js.map
