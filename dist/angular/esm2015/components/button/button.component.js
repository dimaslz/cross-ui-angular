import { Component, Input } from '@angular/core';
export class ButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGltYXNsei9EZXZlbG9wbWVudC9AY3Jvc3MtdWkvYW5ndWxhci9wcm9qZWN0cy9hbmd1bGFyL3NyYy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRekQsTUFBTSxPQUFPLGVBQWU7SUFXMUI7UUFWUyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFVBQUssR0FBVyxNQUFNLENBQUM7UUFDdkIsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUN4QixPQUFFLEdBQVcsUUFBUSxDQUFDO1FBQ3RCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUN4QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUVqQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix5UUFBc0M7YUFHdkM7Ozs7d0JBRUUsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7aUJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3Jvc3MtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZ1bGxXaWR0aDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJ2JsdWUnO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmcgPSAnbWVkaXVtJztcbiAgQElucHV0KCkgdWk6IHN0cmluZyA9ICdzaW1wbGUnO1xuICBASW5wdXQoKSBwaWxsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdidXR0b24nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjaXJjbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc3F1YXJlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=