import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonComponent } from './button.component';
// import { CrossButton } from '@cross-ui/core';
// import { applyPolyfills } from '@cross-ui/core/loader';
// applyPolyfills().then(() => {
//   customElements.define('cui-button', CrossButton);
// });
export class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonComponent],
                imports: [],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [ButtonComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGltYXNsei9EZXZlbG9wbWVudC9AY3Jvc3MtdWkvYW5ndWxhci9wcm9qZWN0cy9hbmd1bGFyL3NyYy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsZ0RBQWdEO0FBQ2hELDBEQUEwRDtBQUUxRCxnQ0FBZ0M7QUFDaEMsc0RBQXNEO0FBQ3RELE1BQU07QUFTTixNQUFNLE9BQU8sWUFBWTs7O1lBUHhCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxFQUNSO2dCQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IENyb3NzQnV0dG9uIH0gZnJvbSAnQGNyb3NzLXVpL2NvcmUnO1xuLy8gaW1wb3J0IHsgYXBwbHlQb2x5ZmlsbHMgfSBmcm9tICdAY3Jvc3MtdWkvY29yZS9sb2FkZXInO1xuXG4vLyBhcHBseVBvbHlmaWxscygpLnRoZW4oKCkgPT4ge1xuLy8gICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2N1aS1idXR0b24nLCBDcm9zc0J1dHRvbik7XG4vLyB9KTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQnV0dG9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gIGV4cG9ydHM6IFtCdXR0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1vZHVsZSB7IH1cbiJdfQ==