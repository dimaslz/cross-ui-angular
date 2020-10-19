(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@cross-ui/core'), require('@cross-ui/core/loader')) :
    typeof define === 'function' && define.amd ? define('@cross-ui/angular', ['exports', '@angular/core', '@cross-ui/core', '@cross-ui/core/loader'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['cross-ui'] = global['cross-ui'] || {}, global['cross-ui'].angular = {}), global.ng.core, global['@cross-ui/core'], global['@cross-ui/core/loader']));
}(this, (function (exports, core, core$1, loader) { 'use strict';

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
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
        ButtonComponent.prototype.ngOnInit = function () {
        };
        return ButtonComponent;
    }());
    ButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'cross-button',
                    template: "<cui-button\n  [fullWidth]=\"fullWidth\"\n  [color]=\"color\"\n  [type]=\"type\"\n  [size]=\"size\"\n  [disabled]=\"disabled\"\n  [ui]=\"ui\"\n  [square]=\"square\"\n  [circle]=\"circle\"\n  [pill]=\"pill\"\n>\n  <ng-content></ng-content>\n</cui-button>"
                },] }
    ];
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        fullWidth: [{ type: core.Input }],
        color: [{ type: core.Input }],
        size: [{ type: core.Input }],
        ui: [{ type: core.Input }],
        pill: [{ type: core.Input }],
        type: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        circle: [{ type: core.Input }],
        square: [{ type: core.Input }]
    };

    // import { CrossButton } from '@cross-ui/core';
    // import { applyPolyfills } from '@cross-ui/core/loader';
    // applyPolyfills().then(() => {
    //   customElements.define('cui-button', CrossButton);
    // });
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        return ButtonModule;
    }());
    ButtonModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ButtonComponent],
                    imports: [],
                    schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                    exports: [ButtonComponent]
                },] }
    ];

    loader.applyPolyfills().then(function () {
        customElements.define('cui-button', core$1.CrossButton);
    });
    var NgCrossUIModule = /** @class */ (function () {
        function NgCrossUIModule() {
        }
        return NgCrossUIModule;
    }());
    NgCrossUIModule.decorators = [
        { type: core.NgModule, args: [{
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

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.NgCrossUIModule = NgCrossUIModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cross-ui-angular.umd.js.map
